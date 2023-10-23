const fs = require('fs');

function updateFile(fileName) {
  const content = 'hello world\n';
  fs.writeFileSync(fileName, content);
  return fs.readFileSync(fileName, 'utf-8');
}

const files = ['test1.js'];

let updatedFileContents = [];

for (const file of files) {
  const updatedContent = updateFile(file);
  updatedFileContents.push(updatedContent);
}

updatedFileContents;