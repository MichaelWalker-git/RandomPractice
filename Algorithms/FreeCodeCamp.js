/**
 *
 * @param arr
 * @param func
 * @returns {*}
 */
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/**
 *
 * @param bool
 * @returns {boolean}
 */
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

/**
 * Capitalizes each word
 * @param {string} str
 * @returns {string}
 */
function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.substring(0,1).toUpperCase() + word.substring(1, str.length).toLowerCase())
    .join(" ");
}

titleCase("I'm a little tea pot");

/**
 *
 * @param arr1
 * @param arr2
 * @param n
 * @returns {*[]}
 */
function frankenSplice(arr1, arr2, n) {
  const first = arr2.slice().splice(0, n);
  const sec = arr2.slice().splice(n, arr1.length + 1);
  return [...first, ...arr1, ...sec];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/**
 *
 * @param arr
 * @param num
 * @returns {*}
 */
function getIndexToIns(arr, num) {
  if(arr.length === 0){
    return 0;
  }
  const sortArr = arr.sort((a,b) => a - b);;
  for(let idx = 0; idx < sortArr.length; idx++){
    if(sortArr[idx] >= num){
      return idx;
    }
  };
  return arr.length;
}

getIndexToIns([5, 3, 20, 3], 5)

/**
 *
 * @param arr
 * @returns {boolean}
 */
function mutation(arr) {
  const first = new Set(arr[0].split("").map((val) => val.toLowerCase()));
  const sec = arr[1].split("");

  for(let i = 0; i < sec.length; i++){
    if(!first.has(sec[i].toLowerCase())){
      return false;
    }
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])

