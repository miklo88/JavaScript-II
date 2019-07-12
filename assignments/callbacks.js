// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.
// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// const items = ['nick', 'carl', 'aislynn', 'jay', 'robert'];
  //Given this problem: 
  
// function getLength(arr, cb) {
//   getLength passes the length of the array into the callback.
// }
// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
//   //Given this problem: getLength test
//   function getLength(arr, cb) {
//     
//   }
//   function getLength(arr, cb) {
//     return cb(arr.length);
//   }
//   getLength(items, function(first) {
//     console.log(first)
//   });


// function last(arr, cb) {
// }
// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum']; // last passes the last item of the array into the callback.
  // function last(arr, cb) {
  // }

  // function last(arr, cb) {
  //   return cb(arr.length, -1);
  // }

  // last(items, function(last) {
  //   console.log(arr.length)
  // });

// function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
// }
// code sumNums
  // function sumNums(x, y, cb) {
  //   return cb(x + y);
  // }
  // sumNums(2, 5, function(add) {
  //   console.log(add)
  // });

// function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
// }
  // function multiplyNums(x, y, cb) {
  //   return cb(x * y);
  // }
  // multiplyNums(2, 5, function(multiply) {
  //   console.log(multiply)
  // });  

// function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
// }
  // function contains(item, list, cb) {
  //   return cb(item, list, cb);
  // }
  // contains(item, list, cb, function(contains) {
  //   console.log(contains)
  // });


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const seen = {};
  for (let i = 0; i < items.length; i++) {
    seen[items[i]] = true;      
  }
  cb(Object.keys(seen));     
}