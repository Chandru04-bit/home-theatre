const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir + '/' + file;
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git') && !full.includes('scratch')) {
        results = results.concat(walkDir(full));
      }
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const htmlFiles = walkDir('.');
let errors = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  
  // 1. Check favicon links
  const favMatches = content.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi) || [];
  favMatches.forEach(tag => {
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      const relPath = hrefMatch[1];
      const target = path.resolve(dir, relPath);
      if (!fs.existsSync(target)) {
        console.error(`ERROR: ${file} broken favicon href: ${relPath} -> ${target}`);
        errors++;
      }
    }
  });

  // 2. Check brand logo image src
  const logoMatches = content.match(/<img[^>]+class=["'][^"']*brand-logo[^"']*["'][^>]*>/gi) || [];
  logoMatches.forEach(tag => {
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    if (srcMatch) {
      const relPath = srcMatch[1];
      const target = path.resolve(dir, relPath);
      if (!fs.existsSync(target)) {
        console.error(`ERROR: ${file} broken logo src: ${relPath} -> ${target}`);
        errors++;
      }
    }
  });
});

console.log(`Path check completed on ${htmlFiles.length} files. Total errors: ${errors}`);
