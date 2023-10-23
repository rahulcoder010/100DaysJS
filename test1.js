const fs = require('fs');

// Function to write 'hello world' in node.js
function writeHelloWorld() {
  const content = 'hello world';

  // Write to test1.js file
  fs.writeFileSync('test1.js', content);
  
  // Read test1.js file and return the updated file contents
  const updatedContent = fs.readFileSync('test1.js', 'utf8');
  return updatedContent;
}

writeHelloWorld();