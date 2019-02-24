
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largest = nums[0];
    if(!nums || nums.length < 2){
        return nums;
    }
    for(let i = 0; i < nums.length; i++){
        let currentLargest = nums[i];
        largest = currentLargest > largest ? currentLargest : largest;

        for (let j = i + 1; j < nums.length; j++){
            currentLargest += nums[j];
            largest = currentLargest > largest ? currentLargest : largest;
        }
}
    return largest;
};
```

Time Complexity: O(n^2)
Memory: O(1)


Leetcode solution:
```
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}
```

Discussed by Jon Bentley (Sep. 1984 Vol. 27 No. 9 Communications of the ACM P885)

The paragraph below was copied from his paper (with a little modifications)

algorithm that operates on arrays: it starts at the left end (element A[1]) and scans through to the right end (element A[n]), keeping track of the maximum sum subvector seen so far. The maximum is initially A[0]. Suppose we've solved the problem for A[1 .. i - 1]; how can we extend that to A[1 .. i]? The maximum
sum in the first I elements is either the maximum sum in the first i - 1 elements (which we'll call MaxSoFar), or it is that of a subvector that ends in position i (which we'll call MaxEndingHere).

MaxEndingHere is either A[i] plus the previous MaxEndingHere, or just A[i], whichever is larger.


Alternate:

```

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0]
    var cur = 0
    for(var i = 0; i < nums.length; i++){
        cur += nums[i]
        if(cur < 0 || cur < nums[i]) cur = nums[i]
        max = Math.max(cur, max)
    }
    return max
};
```