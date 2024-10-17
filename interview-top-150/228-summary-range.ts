/**
 * 228. Summary Range
 * 
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * 
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 * 
 * "a->b" if a != b
 * "a" if a == b
 */

export const summaryRange = (nums: number[]): string[] => {
  if (!nums.length) return [];

  let start = nums[0];
  const result: string[] = [];

  const updateResult = (start: number, end: number) => {
    const newResult = start === end ? start.toString() : `${start}->${end}`;
    result.push(newResult);
  }

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    const prevNum = nums[i - 1];

    if (currNum !== prevNum + 1) {
      updateResult(start, prevNum)
      start = currNum;
    }
  }

  updateResult(start, nums[nums.length - 1]);

  return result;
}

const result1 = summaryRange([0,1,2,4,5,7]); // ['0->2', '4->5', '7']
console.log(result1);

const result2 = summaryRange([0,2,3,4,6,8,9]); // ['0', '2->4', '6', '8->9']
console.log(result2);