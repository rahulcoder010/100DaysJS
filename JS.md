const fs = require('fs');

const updateFile = (filename, content) => {
  fs.writeFileSync(filename, content);
}

updateFile('JS.md', 'Write an introduction of JavaScript.');