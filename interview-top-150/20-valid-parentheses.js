"use strict";
/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.betterIsValid = exports.isValid = void 0;
var isValid = function (s) {
    var parentheses = [];
    var bracket = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    var isClosed = function (character) {
        if (parentheses[parentheses.length - 1] !== bracket[character]) {
            return false;
        }
        parentheses.pop();
        return true;
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var letter = s_1[_i];
        if (letter === ')' || letter === ']' || letter === '}') {
            var result = isClosed(letter);
            if (!result)
                return false;
        }
        else if (letter === '(' || letter === '[' || letter === '{') {
            parentheses.push(letter);
        }
    }
    return parentheses.length === 0;
};
exports.isValid = isValid;
/** Optimization */
var betterIsValid = function (s) {
    var parentheses = [];
    var bracket = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    var openBrackets = new Set(['(', '[', '{']);
    var isCloseBracket = function (v) {
        return typeof v === 'string' && Object.keys(bracket).includes(v);
    };
    for (var _i = 0, s_2 = s; _i < s_2.length; _i++) {
        var letter = s_2[_i];
        if (openBrackets.has(letter)) {
            parentheses.push(letter);
        }
        else if (isCloseBracket(letter)) {
            var last = parentheses.pop();
            if (last !== bracket[letter]) {
                return false;
            }
        }
    }
    return parentheses.length === 0;
};
exports.betterIsValid = betterIsValid;
