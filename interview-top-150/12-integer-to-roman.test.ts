import { betterIntoRoman } from './12-integer-to-roman';

describe('Integer to Roman', () => {
  it('should convert numbers to a Roman numeral', () => {
    const result1 = betterIntoRoman(3749);
    const result2 = betterIntoRoman(58);
    const result3 = betterIntoRoman(1994);

    expect(result1).toBe('MMMDCCXLIX');
    expect(result2).toBe('LVIII');
    expect(result3).toBe('MCMXCIV');
  });
});
