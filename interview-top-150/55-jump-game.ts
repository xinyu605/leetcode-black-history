/**
 * 55. Jump Game
 * 
 * You are given an integer array nums. 
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

export const canJump = (nums: number[]): boolean => {
  let maxReach = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= length  - 1) return true;
  }

  return false;
}

const result1 = canJump([2, 3, 1, 1, 4]);
console.log(result1);

const result2 = canJump([3, 2, 1, 0, 4]);
console.log(result2);