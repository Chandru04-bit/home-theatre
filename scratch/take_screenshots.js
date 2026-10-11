const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + process.cwd().replace(/\\/g, '/') + '/index.html';

const widths = [1440, 1024, 768, 360];

widths.forEach(w => {
  const h = w === 360 ? 640 : 900;
  const out = path.resolve(`scratch/screen_${w}.png`);
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${out}" --window-size=${w},${h} "${fileUrl}"`);
  console.log(`Saved ${out}`);
});
