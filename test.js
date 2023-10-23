const fs = require('fs');

// Function to update the contents of test.js file
function updateTestFile() {
  // Read the existing contents of test.js file
  const existingContents = fs.readFileSync('test.js', 'utf-8');
  
  // Write the updated contents to the test.js file
  const updatedContents = existingContents + '\n// Write test cases for login & registration';
  fs.writeFileSync('test.js', updatedContents, 'utf-8');
  
  // Read the updated contents of test.js file
  const readUpdatedContents = fs.readFileSync('test.js', 'utf-8');
  
  // Return the updated file contents
  return readUpdatedContents;
}

// Invoke the function to update the test.js file and get the updated contents
const updatedFileContents = updateTestFile();

// Print the updated file contents
console.log(updatedFileContents);