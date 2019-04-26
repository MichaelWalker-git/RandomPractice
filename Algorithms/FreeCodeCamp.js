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