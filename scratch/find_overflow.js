const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
const tmpDir = path.join(os.tmpdir(), 'chrome_check_' + Date.now());

const chromeProc = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9555',
  '--user-data-dir=' + tmpDir,
  '--window-size=360,640',
  fileUrl
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9555/json');
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.type === 'page' && t.url.includes('index.html'));
    
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `(() => {
            const overflowing = [];
            document.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              if (r.right > window.innerWidth + 1) {
                overflowing.push({
                  tag: el.tagName,
                  cls: el.className,
                  id: el.id,
                  right: r.right,
                  width: r.width
                });
              }
            });
            const toggler = document.querySelector('.navbar-toggler-custom');
            return JSON.stringify({
              windowWidth: window.innerWidth,
              scrollWidth: document.documentElement.scrollWidth,
              togglerRect: toggler ? toggler.getBoundingClientRect() : null,
              overflowing: overflowing.slice(0, 15)
            });
          })()`,
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
