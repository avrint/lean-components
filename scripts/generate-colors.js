import fs from 'fs';
import path from 'path';
import { formatHex } from 'culori';
import * as tailwindColors from 'tailwindcss/colors';


function convertTailwindColorsToHex(colors) {
  const hexColors = {};

  for (const [colorName, colorValue] of Object.entries(colors)) {
    hexColors[colorName] = typeof(colorValue) == "string" ? "" : {};
    if (typeof(colorValue) == "string"){
      hexColors[colorName] = colorValue;
      continue;
    }
    
    for (const [shade, shadeColor] of Object.entries(colorValue)) {
      let _shadeColor = shadeColor;
      if (_shadeColor.includes("oklch")) {
        _shadeColor = formatHex(_shadeColor)
      }
        hexColors[colorName][shade] = _shadeColor;
    }
  }

  return hexColors;
}

(async () => {
  const hexTailwindColors = convertTailwindColorsToHex(tailwindColors.default);
  console.info(hexTailwindColors);
})();