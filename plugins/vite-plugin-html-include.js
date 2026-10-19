import fs from 'node:fs';
import path from 'node:path';
import Handlebars from 'handlebars';

export default function htmlIncludePlugin(options = {}) {
  // Define where your fragments/sections are stored relative to project root
  const fragmentsDir = options.fragmentsDir || path.resolve(process.cwd(), 'src');

  // Helper to parse attributes from the <html-include> tag string
  function parseAttributes(attrString) {
    const attrs = {};
    const attrRegex = /(\w+)=["']([^"']*)["']/g;
    let match;
    while ((match = attrRegex.exec(attrString)) !== null) {
      attrs[match[1]] = match[2];
    }
    return attrs;
  }

  // Helper to parse the <data> JSON block inside an <html-include> tag
  function parseDataBlock(childrenString) {
    if (!childrenString) return {};
    const dataMatch = childrenString.match(/<data\b[^>]*>([\s\S]*?)<\/data>/i);
    if (dataMatch && dataMatch[1]) {
      try {
        return JSON.parse(dataMatch[1].trim());
      } catch (e) {
        throw new Error(`[vite-plugin-html-include] Failed to parse JSON inside <data> tag:\n${e.message}`);
      }
    }
    return {};
  }

  // Recursive function to process files and replace includes
  function processFile(filePath, currentStack = []) {
    const resolvedPath = path.resolve(fragmentsDir, filePath);

    // 1. Circular Include Detection
    if (currentStack.includes(resolvedPath)) {
      const chain = [...currentStack, resolvedPath]
        .map(p => path.relative(process.cwd(), p))
        .join(' ➔ ');
      throw new Error(`[vite-plugin-html-include] Circular include detected:\n  ${chain}`);
    }

    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`[vite-plugin-html-include] Fragment not found: ${filePath} (Resolved to: ${resolvedPath})`);
    }

    let content = fs.readFileSync(resolvedPath, 'utf-8');
    const newStack = [...currentStack, resolvedPath];

    // 2. Match both self-closing and block-level <html-include> tags (supporting <data> children)
    const includeRegex = /<html-include\s+([^>]+)(?:\/>|>([\s\S]*?)<\/html-include>)/g;

    content = content.replace(includeRegex, (match, attrString, childrenString) => {
      const attrs = parseAttributes(attrString);
      const src = attrs.src;

      if (!src) {
        throw new Error(`[vite-plugin-html-include] Missing 'src' attribute in <html-include ${attrString}>`);
      }

      // Recursively load the included fragment
      let fragmentContent = processFile(src, newStack);

      // 3. Build context: attributes + parsed <data> JSON block
      const dataPayload = parseDataBlock(childrenString);
      const context = {
        data: dataPayload,
        ...attrs
      };

      // 4. Compile and evaluate fragment using Handlebars
      try {
        const template = Handlebars.compile(fragmentContent);
        return template(context);
      } catch (err) {
        throw new Error(`[vite-plugin-html-include] Template compilation error in fragment '${src}':\n${err.message}`);
      }
    });

    return content;
  }

  return {
    name: 'vite-plugin-html-include',
    transformIndexHtml(html, ctx) {
      try {
        // Match entry-level include tags
        const includeRegex = /<html-include\s+([^>]+)(?:\/>|>([\s\S]*?)<\/html-include>)/g;

        let processedHtml = html.replace(includeRegex, (match, attrString, childrenString) => {
          const attrs = parseAttributes(attrString);
          const src = attrs.src;

          if (!src) return match;

          // Process the fragment
          let fragmentContent = processFile(src, [ctx.filename]);

          // Build context
          const dataPayload = parseDataBlock(childrenString);
          const context = {
            data: dataPayload,
            ...attrs
          };

          // Compile and evaluate
          const template = Handlebars.compile(fragmentContent);
          return template(context);
        });

        return processedHtml;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };
}