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

/**
 * BC - Length of list is 0...?
 * Progress: slice the list smaller each time?
 * Call itself if we haven't found the sought word
 *
 *
 * Without recursion:
 * Loop through the list,
 * conditional that checks if the current word I'm on in the loop is the sought word,
 * if it is, return true,
 * if I reach the end of the list, and haven't found the sought word, return false.
 *
 */

function find(arr, val) {
  if (arr.length === 0) return false;

  return arr[0] === val ? true : find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

/**
 * BC - if length of str is 0 OR if first char doesn't equal last char
 * progress - slicing off beginning and end each time we call func again
 *
 */

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str === "") return true;

  if (str[0] !== str[str.length - 1]) return false;

  if (str.length === 2 && str[0] === str[1]) {
    return true;
  }

  return isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

/**
 * BC - str length is 0
 * progress - slice the string each time we call func again
 *
 */
function revString(str) {
  if (str.length === 0) return "";

  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
/**
 *  BC - empty array
 *  progress - pop last element of arr
 *  if matches value, return arr.length-1
 *  else continue popping
 */
function findIndex(arr, val) {
  if (arr[0] === val) return 0;
  if (arr.length === 0) return -1;

  return findIndex(arr.slice(1), val) + 1 || - 1;
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
