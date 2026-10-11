const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = dir + '/' + file;
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory() && !full.includes('node_modules') && !full.includes('.git')) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

walk('.').forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<a class="navbar-brand[^"]*"[^>]*>([\s\S]*?)<\/a>/);
  if (m) {
    console.log(f, '=>', m[1].trim().replace(/\s+/g, ' ').substring(0, 100));
  } else {
    console.log(f, '=> NO NAVBAR-BRAND');
  }
});

console.log('--- DRAWER BRANDS ---');
walk('.').forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<div class="nav-drawer-brand">([\s\S]*?)<\/div>/);
  if (m) {
    console.log(f, 'drawer =>', m[1].trim().replace(/\s+/g, ' ').substring(0, 100));
  } else {
    console.log(f, '=> NO DRAWER BRAND');
  }
});
