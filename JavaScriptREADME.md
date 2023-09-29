const fs = require("fs");

// Function to write to file
const writeFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been updated`);
  });
};

// Update JavaScriptREADME.md
const readmeContent = `# 100DaysJS
100 Days to JS Master

## Array Methods

- map()
- filter()
- reduce()
- forEach()
- find()

These are some of the most commonly used array methods in JavaScript.`;

writeFile("JavaScriptREADME.md", readmeContent);
