/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 */

export const lengthOfLongestSubstring = (s: string): number => {
  const slidingWindow = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const endCharacter = s[right];
    while (slidingWindow.has(endCharacter)) {
      slidingWindow.delete(s[left]);
      left++;
    }
    slidingWindow.add(endCharacter);
    const substringLength = right - left + 1;
    maxLength = Math.max(maxLength, substringLength);
  }

  return maxLength;
}

const result1 = lengthOfLongestSubstring('abcabcbb'); // 3
console.log(result1);

const result2 = lengthOfLongestSubstring('bbbbb'); // 1
console.log(result2);

const result3 = lengthOfLongestSubstring('pwwkew'); // 3
console.log(result3);