// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
const gotLength = (length) => `This array has a length of ${length}.`;
console.log(getLength(items, gotLength));



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr[arr.length - 1];
  return cb(lastItem);
}
const gotLast = (item) => `${item} is the last thing in the array.`;
console.log(last(items,gotLast));



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}
const addedNums = (sum) => { return sum };
console.log(sumNums(5,5,addedNums));



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}
const multipliedNums = (product) => { return product };
console.log(multiplyNums(5,5,multipliedNums));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i=0; i<list.length;i++){
    if (list[i]==item){return cb(true);}
  }
  return cb(false);
}
const isItInThere = (answer) => {
  if (answer == true) { return "Yeah, its in there."; }
  else { return "Nah fam." }
};
console.log(contains("Gum",items,isItInThere));

/* STRETCH PROBLEM */

const theNums = [1,1,1,1,1,2,2,2,3,33,5,5,5,4,2,7,56,47,2,5,4,8,9,6,3,21,4,7,8,6,9,7,41,21,89,6,653,7,498,419,16,38,8,76,534,347,378,3478,438,498,948,8,6,4,64,64,64,97,79,14,8,6,64,64,67,13,18,8,63,46,8,1,3,8,74,76,1,81,1,6,438,83,4,468,68,64,384,648,148,681,684,684,684,684,6814,848,169,848,7,9,987,987,987,987,9887,987,7,8,9,78,9,7,9,7,9,7,8,7,4,8,4,81,85,1,5,15,5,7,6,7,67,6,6,6,4,8,41,65,6,86,4];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  let noDupes = Array.from(new Set(array));
  return cb(noDupes);
}
const removedDuplicates = (array)  => { return array; };
console.log(removeDuplicates(theNums,removedDuplicates));
