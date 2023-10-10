var flatArray = []; //initialize an empty array

function flattenArray(arr) {
   for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
         flattenArray(arr[i]);
      } else {
         flatArray.push(arr[i]);
      }
   }
}

//flatten the given array
flattenArray(inputArray);

console.log(flatArray); //print the flattened array