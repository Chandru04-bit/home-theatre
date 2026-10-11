const fs = require('fs');

function walkDir(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir + '/' + file;
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git')) {
        results = results.concat(walkDir(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

walkDir('.').forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const links = c.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi);
  console.log(f, '=>', links ? links.map(l => l.replace(/\s+/g, ' ')).join(' | ') : 'NO FAVICON LINKS');
});
