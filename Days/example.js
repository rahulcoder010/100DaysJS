const fs = require('fs');

const updatedContents = 'Write DSA hard task with solution in Days/example.js Javascript';

fs.writeFile('Days/example.js', updatedContents, 'utf8', (err) => {
  if (err) throw err;
  console.log('File updated successfully');
});