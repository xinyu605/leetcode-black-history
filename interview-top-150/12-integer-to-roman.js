"use strict";
/**
 * 12. Integer to Roman
 *
 * Seven different symbols represent Roman numerals with the following values:
 * I -> 1   |  V -> 5
 * X -> 10  |  L -> 50
 * C -> 100 |  D -> 500
 * M -> 1000
 *
 * Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.
 * Converting a decimal place value into a Roman numeral has the following rules:
 *
 * 1. If the value does not start with 4 or 9,
 *    select the symbol of the maximal value that can be subtracted from the input,
 *    append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
 *
 * 2. If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol,
 *    for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX.
 *    Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
 *
 * 3. Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10.
 *    You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
 *    If you need to append a symbol 4 times use the subtractive form.
 *
 * Given an integer, convert it to a Roman numeral.
 *
 * Constraints: 1 <= num <= 3999
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.intToRoman = void 0;
var intToRoman = function (num) {
    if (num < 1 || num > 3999)
        return '';
    var romanMap = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    };
    var isRomanMapKey = function (value) {
        return typeof value === 'number' &&
            Object.keys(romanMap).includes(value.toString());
    };
    var getSingleRoman = function (number, exponent) {
        var base = Math.pow(10, exponent);
        if (number === 0 || !isRomanMapKey(base))
            return '';
        var followingNum = number * base + base;
        var followingRoman = isRomanMapKey(followingNum)
            ? romanMap[followingNum]
            : null;
        /** 4 or 9 */
        if (followingRoman !== null) {
            var prevRoman = romanMap[base];
            return "".concat(prevRoman).concat(followingRoman);
        }
        /** not 4 or 9 */
        if (number >= 5) {
            var prevNum = 5 * base;
            var prevRoman = isRomanMapKey(prevNum) ? romanMap[prevNum] : '';
            var restRomans = Array.from({ length: number - 5 }, function () { return romanMap[base]; }).join('');
            return "".concat(prevRoman).concat(restRomans);
        }
        return Array.from({ length: number }, function () { return romanMap[base]; }).join('');
    };
    var rest = num;
    var result = '';
    var n = num.toString().length - 1;
    while (n >= 0) {
        var roman = getSingleRoman(Math.trunc(rest / Math.pow(10, n)), n);
        result = "".concat(result).concat(roman);
        rest = rest % Math.pow(10, n);
        n--;
    }
    return result;
};
exports.intToRoman = intToRoman;
var result1 = (0, exports.intToRoman)(3749); // "MMMDCCXLIX"
var result2 = (0, exports.intToRoman)(58); // "LVIII"
var result3 = (0, exports.intToRoman)(1994); // "MCMXCIV"
console.log({ result1: result1, result2: result2, result3: result3 });
/** Optimization */
var betterIntoRoman = function (num) {
    if (num < 1 || num > 3999)
        return '';
    var romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];
    var result = '';
    var rest = num;
    romanNumerals.forEach(function (_a) {
        var value = _a.value, numeral = _a.numeral;
        while (rest >= value) {
            result = "".concat(result).concat(numeral);
            rest -= value;
        }
    });
    return result;
};
var result4 = betterIntoRoman(3749);
var result5 = betterIntoRoman(58);
var result6 = betterIntoRoman(1994);
console.log({ result4: result4, result5: result5, result6: result6 });
