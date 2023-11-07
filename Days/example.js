const fs = require('fs');

// Create or update example.js file
const content = 'Write DSA medium level task with solution in javascript.';
fs.writeFileSync('Days/example.js', content);

// Read the updated file contents
const updatedContent = fs.readFileSync('Days/example.js', 'utf8');

updatedContent;