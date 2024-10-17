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

export const intToRoman = (num: number) => {
  if (num < 1 || num > 3999) return '';

  const romanMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  } as const;

  const isRomanMapKey = (value: unknown): value is keyof typeof romanMap =>
    typeof value === 'number' &&
    Object.keys(romanMap).includes(value.toString());

  const getSingleRoman = (number: number, exponent: number): string => {
    const base = 10 ** exponent;
    if (number === 0 || !isRomanMapKey(base)) return '';

    const followingNum = number * base + base;
    const followingRoman = isRomanMapKey(followingNum)
      ? romanMap[followingNum]
      : null;

    /** 4 or 9 */
    if (followingRoman !== null) {
      const prevRoman = romanMap[base];
      return `${prevRoman}${followingRoman}`;
    }

    /** not 4 or 9 */
    if (number >= 5) {
      const prevNum = 5 * base;
      const prevRoman = isRomanMapKey(prevNum) ? romanMap[prevNum] : '';
      const restRomans = Array.from(
        { length: number - 5 },
        () => romanMap[base]
      ).join('');
      return `${prevRoman}${restRomans}`;
    }

    return Array.from({ length: number }, () => romanMap[base]).join('');
  };

  let rest = num;
  let result = '';
  let n = num.toString().length - 1;

  while (n >= 0) {
    const roman = getSingleRoman(Math.trunc(rest / 10 ** n), n);
    result = `${result}${roman}`;
    rest = rest % 10 ** n;
    n--;
  }

  return result;
};

const result1 = intToRoman(3749); // "MMMDCCXLIX"
const result2 = intToRoman(58); // "LVIII"
const result3 = intToRoman(1994); // "MCMXCIV"

console.log({ result1, result2, result3 });

/** Optimization */
export const betterIntoRoman = (num: number) => {
  if (num < 1 || num > 3999) return '';

  const romanNumerals = [
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

  let result = '';
  let rest = num;

  romanNumerals.forEach(({ value, numeral }) => {
    while (rest >= value) {
      result = `${result}${numeral}`;
      rest -= value;
    }
  });

  return result;
};

const result4 = betterIntoRoman(3749);
const result5 = betterIntoRoman(58);
const result6 = betterIntoRoman(1994);

console.log({ result4, result5, result6 });
