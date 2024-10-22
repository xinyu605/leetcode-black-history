"use strict";
/**
 * 383. Ransom Note
 *
 *  Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from magazine and false otherwise.
 *  Each letter in `magazine` can only be used once in `ransomNote`.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterCanConstruct = exports.canConstruct = void 0;
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length < 1 || magazine.length > Math.pow(10, 5))
        return false;
    var record = {};
    magazine.split('').forEach(function (s) {
        if (record[s] === undefined) {
            record[s] = 1;
            return;
        }
        record[s] += 1;
    });
    for (var i = 0; i < ransomNote.length; i++) {
        var letter = ransomNote[i];
        if (record[letter] === undefined || record[letter] === 0)
            return false;
        record[letter] -= 1;
    }
    return true;
};
exports.canConstruct = canConstruct;
/** Optimization */
var betterCanConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length)
        return false;
    var record = {};
    for (var _i = 0, magazine_1 = magazine; _i < magazine_1.length; _i++) {
        var letter = magazine_1[_i];
        record[letter] = (record[letter] || 0) + 1;
    }
    for (var _a = 0, ransomNote_1 = ransomNote; _a < ransomNote_1.length; _a++) {
        var letter = ransomNote_1[_a];
        if (!record[letter])
            return false;
        record[letter] -= 1;
    }
    return true;
};
exports.betterCanConstruct = betterCanConstruct;
