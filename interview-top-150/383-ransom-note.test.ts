import { betterCanConstruct, canConstruct } from './383-ransom-note';

describe('Check if the ransomNote can construct magazine', () => {
  it('should return false if cannot construct', () => {
    const result1 = canConstruct('a', 'b');
    const result2 = canConstruct('aa', 'ab');

    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  it('should return true if can construct', () => {
    const result3 = canConstruct('aa', 'aab');
    const result4 = canConstruct('abc', 'ajiebkidceke');

    expect(result3).toBe(true);
    expect(result4).toBe(true);
  });

  it('optimization of canConstruct', () => {
    const result1 = betterCanConstruct('a', 'b');
    const result2 = betterCanConstruct('aa', 'ab');
    const result3 = betterCanConstruct('aa', 'aab');
    const result4 = betterCanConstruct('abc', 'ajiebkidceke');

    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(true);
    expect(result4).toBe(true);
  });
});
