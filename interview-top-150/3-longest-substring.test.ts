import { lengthOfLongestSubstring } from './3-longest-substring';

describe('Longest Substring Without Repeating Characters', () => {
  it('should find the length of the longest substring without repeating characters', () => {
    const result1 = lengthOfLongestSubstring('abcabcbb');
    const result2 = lengthOfLongestSubstring('bbbbb');
    const result3 = lengthOfLongestSubstring('pwwkew');

    expect(result1).toBe(3);
    expect(result2).toBe(1);
    expect(result3).toBe(3);
  });
});
