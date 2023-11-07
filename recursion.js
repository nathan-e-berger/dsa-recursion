/** product: calculate the product of an array of numbers. */
/**
 *  BC - empty array
 *  call product with index 0 and check if empty
 *  if not, then call product(next index).
 *  if yes, then return
 */
function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

/**
 *  BC - empty array
 *  call longest(idx0) and check if array is empty
 *  if not, then call longest(next idx) and compare to previous calls
 *  if yes, then return
 */
function longest(words) {
  if (words.length === 0) return 0;

  return words[0].length > longest(words.slice(1))
    ? words[0].length
    : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

/**
 *  BC - are we at str.length?
 *  call everyOther on all idxs and check if at str.length
 *  if not, call everyOther(nextix)
 *  if yes, return
 *
 * "hello"
*/
// everyOther(str):
// hello;
// llo;
// "";

// str[0] = h + l + o
function everyOther(str) {

  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
