```
const fs = require('fs');

const writeToFile = (fileName, content) => {
  fs.writeFileSync(fileName, content, 'utf8');
}

// Update test1.js
const test1Content = 'console.log("Hello World");';
writeToFile('test1.js', test1Content);

// Read the updated files
const readFileContent = (fileName) => {
  return fs.readFileSync(fileName, 'utf8');
}

// Read test1.js
const test1UpdatedContent = readFileContent('test1.js');

test1UpdatedContent;
```