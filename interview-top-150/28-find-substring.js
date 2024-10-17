"use strict";
/**
 * 28. Find the Index of the First Occurrence in a String
 *
 * Given two strings needle and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.strStr = void 0;
var strStr = function (haystack, needle) {
    var validateComplete = function (startIdx) {
        var substring = haystack.substring(startIdx, startIdx + needle.length);
        return substring === needle;
    };
    for (var i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i] && validateComplete(i)) {
            return i;
        }
    }
    return -1;
};
exports.strStr = strStr;
var result1 = (0, exports.strStr)('sadbutsad', 'sad'); // 0
console.log(result1);
var result2 = (0, exports.strStr)('leetcode', 'leeto'); // -1
console.log(result2);
