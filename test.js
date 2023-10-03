const fs = require('fs');

// Function to update the file contents
function updateFileContent(filename, newContent) {
  fs.writeFileSync(filename, newContent);

  // Return the updated file contents
  return fs.readFileSync(filename, 'utf8');
}

// File: test.js
const testJsContent = `// Initial test.js content
// ...

// New test.js content
// Write test cases for login`;

const updatedTestJs = updateFileContent('test.js', testJsContent);

// Return the updated file contents in the same order as provided
updatedTestJs;