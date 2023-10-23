// test1.js

const fs = require('fs');

// Update the file contents
fs.writeFileSync('test1.js', 'console.log("Hello World!");');

// Read the updated file contents
const updatedFileContents = fs.readFileSync('test1.js', 'utf8');

// Return the updated file contents
updatedFileContents