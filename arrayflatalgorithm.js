// arrayflatalgorithm.js

const flattenArray = (arr) => {
  let flattenedArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flattenArray(element));
    } else {
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
};

module.exports = flattenArray;