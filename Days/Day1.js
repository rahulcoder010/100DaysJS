// Original file contents:

function flatArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = flatArray;