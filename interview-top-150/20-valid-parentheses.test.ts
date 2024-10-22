import { betterIsValid, isValid } from './20-valid-parentheses';

describe('An input is valid if open brackets are closed by the same type of brackets', () => {
  it('validate brackets', () => {
    const result1 = isValid('()');
    const result2 = isValid('{}[]{}');
    const result3 = isValid('{]');
    const result4 = isValid('([])');
    const result5 = isValid('a[ejie]ejir');
    const result6 = isValid('a{{eji}ej}i[]r');
    const result7 = isValid('(){}}{');
    const result8 = isValid(']');

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(false);
    expect(result4).toBe(true);
    expect(result5).toBe(true);
    expect(result6).toBe(true);
    expect(result7).toBe(false);
    expect(result8).toBe(false);
  });

  it('better validation', () => {
    const result1 = betterIsValid('()');
    const result2 = betterIsValid('{}[]{}');
    const result3 = betterIsValid('{]');
    const result4 = betterIsValid('([])');
    const result5 = betterIsValid('as[e]rr');
    const result6 = betterIsValid('a{{eji}ej}i[]r');
    const result7 = betterIsValid('(){}}{');
    const result8 = betterIsValid(']');

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(false);
    expect(result4).toBe(true);
    expect(result5).toBe(true);
    expect(result6).toBe(true);
    expect(result7).toBe(false);
    expect(result8).toBe(false);
  });
});
