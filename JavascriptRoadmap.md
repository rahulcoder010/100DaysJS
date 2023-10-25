const fs = require('fs');

// Read the current contents of JavascriptRoadmap.md
const currentContents = fs.readFileSync('JavascriptRoadmap.md', 'utf-8');

// Append the updated roadmap instructions
const updatedContents = currentContents + '\n\nUse these instructions to update the files: Write roadmap for js master with include all topics..';

// Write the updated contents back to JavascriptRoadmap.md
fs.writeFileSync('JavascriptRoadmap.md', updatedContents);

// Return the updated file contents
updatedContents;