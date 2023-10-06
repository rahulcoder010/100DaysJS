```
function updateFileContents(fileContents) {
  const updatedFileContents = [];
  
  // Loop through each file
  for (let i = 0; i < fileContents.length; i++) {
    // Check if the file is JavaScript.md
    if (fileContents[i].fileName === "JavaScript.md") {
      // Update the file contents
      fileContents[i].fileContents += "Use these instructions to update the files: write a blog 300 words for Javascript ES16.";
    }
    
    // Push the updated file contents to the array
    updatedFileContents.push(fileContents[i].fileContents);
  }
  
  // Return the updated file contents in the same order
  return updatedFileContents;
}

// Usage example
const files = [
  {fileName: "JavaScript.md", fileContents: ""},
  {fileName: "README.md", fileContents: ""},
  {fileName: "index.html", fileContents: ""}
];

const updatedContents = updateFileContents(files);
console.log(updatedContents);
```