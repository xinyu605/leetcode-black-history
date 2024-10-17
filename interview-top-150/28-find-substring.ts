/**
 * 28. Find the Index of the First Occurrence in a String
 * 
 * Given two strings needle and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
 */

export const strStr = (haystack: string, needle: string): number => {
  const validateComplete = (startIdx: number): boolean => {
    const substring = haystack.substring(startIdx, startIdx + needle.length);
    return substring === needle;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i] && validateComplete(i)) {
      return i;
    }
  }

  return -1;
}

const result1 = strStr('sadbutsad', 'sad'); // 0
console.log(result1);

const result2 = strStr('leetcode', 'leeto'); // -1
console.log(result2);