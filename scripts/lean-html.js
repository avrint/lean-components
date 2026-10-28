#!/usr/bin/env node
/**
 * LEAN-HTML UNIFIED ORCHESTRATOR SCRIPT
 * Self-bootstrapping, zero-dependency local CLI runner.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import os from 'node:os';

// --- CONFIGURATION & PINNED VERSIONS ---
const LEAN_BUILDER_VERSION = 'v1.0.0'; // Strictly pinned version
const BIN_DIR = join(process.cwd(), 'bin');

// --- 1. BOOTSTRAP BINARIES IF MISSING ---
async function ensureBinaries() {
  if (!existsSync(BIN_DIR)) {
    mkdirSync(BIN_DIR, { recursive: true });
  }

  const platform = os.platform(); // 'darwin', 'linux', 'win32'
  const arch = os.arch();         // 'x64', 'arm64'
  
  const binaryName = `lean-builder-${LEAN_BUILDER_VERSION}-${platform}-${arch}${platform === 'win32' ? '.exe' : ''}`;
  const binaryPath = join(BIN_DIR, platform === 'win32' ? 'lean-builder.exe' : 'lean-builder');

  if (existsSync(binaryPath)) {
    return binaryPath; // Already present
  }

  console.log(`⬇️ Bootstrapping lean-builder (${LEAN_BUILDER_VERSION}) for ${platform}-${arch}...`);
  const url = `https://github.com/avrint/lean-builder/releases/download/${LEAN_BUILDER_VERSION}/${binaryName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to download from ${url} (Status: ${response.status})`);
    
    const buffer = await response.arrayBuffer();
    writeFileSync(binaryPath, Buffer.from(buffer));
    
    if (platform !== 'win32') {
      execSync(`chmod +x "${binaryPath}"`);
    }
    
    console.log(`✅ Successfully bootstrapped lean-builder.`);
    return binaryPath;
  } catch (err) {
    console.error(`❌ Critical Error: Failed to bootstrap binary toolchain.`, err);
    process.exit(1);
  }
}

// --- 2. COMMAND ROUTER & EXECUTION ---
async function main() {
  const binaryPath = await ensureBinaries();
  
  // Slice out node and script name, pass remaining args to the binary or local runners
  const args = process.argv.slice(2);
  const command = args[0];
  const passThroughArgs = args.slice(1);

  if (!command) {
    console.log('Usage: bun run ./scripts/lean-html.js [dev|build|preview|storybook:dev|storybook:build]');
    process.exit(1);
  }

  let child;

  switch (command) {
    case 'dev':
      // Run Vite directly for fast HMR
      child = spawn('npx', ['vite', ...passThroughArgs], { stdio: 'inherit', shell: true });
      break;

    case 'build':
      // Execute the standalone pinned binary
      child = spawn(binaryPath, ['build', ...passThroughArgs], { stdio: 'inherit', shell: true });
      break;

    case 'preview':
      child = spawn('npx', ['vite', 'preview', ...passThroughArgs], { stdio: 'inherit', shell: true });
      break;

    case 'storybook:dev':
      child = spawn('npx', ['storybook', 'dev', ...passThroughArgs], { stdio: 'inherit', shell: true });
      break;

    case 'storybook:build':
      child = spawn('npx', ['storybook', 'build', ...passThroughArgs], { stdio: 'inherit', shell: true });
      break;

    default:
      console.error(`❌ Unknown command: "${command}"`);
      process.exit(1);
  }

  child.on('exit', (code) => {
    process.exit(code ?? 0);
  });
}

main();