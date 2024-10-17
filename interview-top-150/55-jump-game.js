/**
 * 55. Jump Game
 *
 * You are given an integer array nums.
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */
var canJump = function (nums) {
    var maxReach = 0;
    var length = nums.length;
    for (var i = 0; i < length; i++) {
        if (i > maxReach)
            return false;
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= length - 1)
            return true;
    }
    return false;
};
var result1 = canJump([2, 3, 1, 1, 4]);
console.log(result1);
var result2 = canJump([3, 2, 1, 0, 4]);
console.log(result2);
