const fs = require('fs');

// Update test.js file
fs.appendFileSync('test.js', '\n\n// Write test cases for login & registration');

// Read test.js file contents
const testFileContents = fs.readFileSync('test.js', 'utf-8');

// Return updated file contents
testFileContents;