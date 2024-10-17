"use strict";
/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
var lengthOfLongestSubstring = function (s) {
    var slidingWindow = new Set();
    var left = 0;
    var maxLength = 0;
    for (var right = 0; right < s.length; right++) {
        var endCharacter = s[right];
        while (slidingWindow.has(endCharacter)) {
            slidingWindow.delete(s[left]);
            left++;
        }
        slidingWindow.add(endCharacter);
        var substringLength = right - left + 1;
        maxLength = Math.max(maxLength, substringLength);
    }
    return maxLength;
};
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
var result1 = (0, exports.lengthOfLongestSubstring)('abcabcbb'); // 3
console.log(result1);
var result2 = (0, exports.lengthOfLongestSubstring)('bbbbb'); // 1
console.log(result2);
var result3 = (0, exports.lengthOfLongestSubstring)('pwwkew'); // 3
console.log(result3);
