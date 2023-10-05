`const fs = require('fs');

// Function to update a file with test cases for login
const updateFileWithTestCases = (filePath) => {
  const existingData = fs.readFileSync(filePath, 'utf8');
  const testCases = `
    describe('Login Test Cases', () => {
      it('should allow a valid user to login successfully', () => {
        // Your test case code here
      });

      it('should show an error message for an invalid username', () => {
        // Your test case code here
      });

      it('should show an error message for an invalid password', () => {
        // Your test case code here
      });
    });
  `;

  const updatedData = existingData.trim() + testCases.trim();
  fs.writeFileSync(filePath, updatedData);
  
  return updatedData;
};

// Update ind.js file with test cases for login and return the updated file contents
const updateIndJS = () => {
  const filePath = 'ind.js';
  return updateFileWithTestCases(filePath);
};

// Call the function to update and return the updated file contents
const updatedFileContents = updateIndJS();

// Print the updated file contents in the same order as provided in the prompt
console.log(updatedFileContents);`