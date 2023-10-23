const fs = require('fs');

// Update test.js file
fs.appendFileSync('test.js', `// Write test cases for login\n`);
fs.appendFileSync('test.js', `// Write test cases for registration\n`);

// Read contents of test.js file
const updatedFileContents = fs.readFileSync('test.js', 'utf-8');

console.log(updatedFileContents);