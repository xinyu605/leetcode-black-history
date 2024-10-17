import { strStr } from './28-find-substring';

describe('Find the Index of the First Occurrence in a String', () => {
  it('should get the index of the first occurrence', () => {
    const result1 = strStr('sadbutsad', 'sad');
    const result2 = strStr('ksustareji', 'star');

    expect(result1).toBe(0);
    expect(result2).toBe(3);
  });

  it('should get -1 if the substring is not found in the string', () => {
    const result1 = strStr('leetcode', 'leeto');
    const result2 = strStr('feijiewkne', 'yan');

    expect(result1).toBe(-1);
    expect(result2).toBe(-1);
  });
});
