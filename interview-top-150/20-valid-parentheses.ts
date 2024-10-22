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

export const isValid = (s: string) => {
  const parentheses: string[] = [];

  const bracket = {
    ')': '(',
    ']': '[',
    '}': '{',
  } as const;

  const isClosed = (character: ')' | ']' | '}') => {
    if (parentheses[parentheses.length - 1] !== bracket[character]) {
      return false;
    }
    parentheses.pop();
    return true;
  };

  for (const letter of s) {
    if (letter === ')' || letter === ']' || letter === '}') {
      const result = isClosed(letter);
      if (!result) return false;
    } else if (letter === '(' || letter === '[' || letter === '{') {
      parentheses.push(letter);
    }
  }

  return parentheses.length === 0;
};

/** Optimization */
export const betterIsValid = (s: string) => {
  const parentheses: string[] = [];

  const bracket = {
    ')': '(',
    ']': '[',
    '}': '{',
  } as const;

  const openBrackets = new Set(['(', '[', '{']);
  const isCloseBracket = (v: unknown): v is keyof typeof bracket =>
    typeof v === 'string' && Object.keys(bracket).includes(v);

  for (const letter of s) {
    if (openBrackets.has(letter)) {
      parentheses.push(letter);
    } else if (isCloseBracket(letter)) {
      const last = parentheses.pop();
      if (last !== bracket[letter]) {
        return false;
      }
    }
  }

  return parentheses.length === 0;
};
