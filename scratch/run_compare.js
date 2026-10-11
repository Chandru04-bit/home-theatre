const { execSync } = require('child_process');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + path.resolve('scratch/compare_navs.html').replace(/\\/g, '/');
const out = path.resolve('scratch/compare.png');
execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${out}" --window-size=1000,600 "${fileUrl}"`);
console.log('compare.png saved');
