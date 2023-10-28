const fs = require("fs");

// Function to update the JavascriptRoadmap.md file
function updateJavascriptRoadmap() {
  const filePath = "JavascriptRoadmap.md";

  // Read the current contents of the file
  const currentContents = fs.readFileSync(filePath, "utf8");

  // Update the contents with the provided instructions
  const updatedContents = `Write roadmap for js master with include all topics..`;

  // Write the updated contents back to the file
  fs.writeFileSync(filePath, updatedContents);

  // Return the updated file contents
  return updatedContents;
}

// Call the function to update the JavascriptRoadmap.md file and get the updated contents
const updatedContents = updateJavascriptRoadmap();

// Display the updated contents
console.log(updatedContents);
