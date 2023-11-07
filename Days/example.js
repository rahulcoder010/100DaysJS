function updateFiles() {
  const updatedFileContents = [];

  const exampleFileContents = `
  /**
   * DSA Medium Level Task
   *
   * Task description:
   * Write a function that solves a medium level DSA problem and returns the solution.
   *
   * Task details:
   * - Input: [input]
   * - Output: [output]
   *
   * @param {inputType} input - The input for the DSA problem.
   * @returns {outputType} The solution to the DSA problem.
   */
  function dsaMediumLevelTask(input) {
    // Your solution code here
  }

  module.exports = dsaMediumLevelTask;
  `;

  updatedFileContents.push(exampleFileContents.replace(/dsaMediumLevelTask/g, 'exampleFunction'));

  return updatedFileContents;
}

updateFiles();