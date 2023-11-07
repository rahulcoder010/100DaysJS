```
const fs = require('fs');
const path = require('path');

// Path to the file
const filePath = path.join(__dirname, 'Days', 'example.js');

// New content for the file
const newContent = 'Write DSA hard task with solution in Days/example.js Javascript.';

// Update the file
fs.writeFileSync(filePath, newContent, 'utf8');

// Read the updated file to get the contents
const updatedContent = fs.readFileSync(filePath, 'utf8');

updatedContent;
```