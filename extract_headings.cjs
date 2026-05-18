const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const pagesDir = path.join(__dirname, 'dental_roots_react_ssr-master/src/pages');
const files = getFiles(pagesDir);

let output = '';

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const headings = [...content.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)];
  if (headings.length > 0) {
    const relPath = path.relative(pagesDir, file);
    output += `\n### ${relPath}\n`;
    for (const match of headings) {
      let text = match[1].replace(/<[^>]+>/g, '').trim();
      if (text) {
        output += `- ${text}\n`;
      }
    }
  }
}

fs.writeFileSync('headings.txt', output);
console.log('Done');
