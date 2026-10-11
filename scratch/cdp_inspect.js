const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
const tmpDir = path.join(os.tmpdir(), 'chrome_cdp_profile_' + Date.now());

const chromeProc = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9444',
  '--user-data-dir=' + tmpDir,
  '--window-size=360,640',
  fileUrl
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9444/json');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.type === 'page');
    console.log('Target tab:', tab.url);
    
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `JSON.stringify({
            brand: document.querySelector('.navbar-brand') ? document.querySelector('.navbar-brand').getBoundingClientRect() : null,
            img: document.querySelector('.brand-logo-img') ? document.querySelector('.brand-logo-img').getBoundingClientRect() : null,
            toggler: document.querySelector('.navbar-toggler') ? document.querySelector('.navbar-toggler').getBoundingClientRect() : null,
            container: document.querySelector('.navbar-container') ? document.querySelector('.navbar-container').getBoundingClientRect() : null,
            windowWidth: window.innerWidth,
            scrollWidth: document.documentElement.scrollWidth,
            togglerStyles: document.querySelector('.navbar-toggler') ? {
              display: getComputedStyle(document.querySelector('.navbar-toggler')).display,
              visibility: getComputedStyle(document.querySelector('.navbar-toggler')).visibility,
              opacity: getComputedStyle(document.querySelector('.navbar-toggler')).opacity,
              width: getComputedStyle(document.querySelector('.navbar-toggler')).width,
              height: getComputedStyle(document.querySelector('.navbar-toggler')).height
            } : null
          })`,
          returnByValue: true
        }
      }));
    };
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1) {
        console.log('Result:', JSON.parse(msg.result.result.value));
        ws.close();
        chromeProc.kill();
        fs.rmSync(tmpDir, { recursive: true, force: true });
        process.exit(0);
      }
    };
  } catch (e) {
    console.error('Error:', e);
    chromeProc.kill();
    fs.rmSync(tmpDir, { recursive: true, force: true });
    process.exit(1);
  }
}, 1500);
