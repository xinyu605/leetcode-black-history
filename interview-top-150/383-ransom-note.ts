/**
 * 383. Ransom Note
 *
 *  Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from magazine and false otherwise.
 *  Each letter in `magazine` can only be used once in `ransomNote`.
 */

export const canConstruct = (ransomNote: string, magazine: string) => {
  if (ransomNote.length < 1 || magazine.length > 10 ** 5) return false;

  const record: Record<string, number> = {};
  magazine.split('').forEach((s) => {
    if (record[s] === undefined) {
      record[s] = 1;
      return;
    }
    record[s] += 1;
  });

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (record[letter] === undefined || record[letter] === 0) return false;
    record[letter] -= 1;
  }

  return true;
};

/** Optimization */
export const betterCanConstruct = (ransomNote: string, magazine: string) => {
  if (ransomNote.length > magazine.length) return false;

  const record: Record<string, number> = {};

  for (const letter of magazine) {
    record[letter] = (record[letter] || 0) + 1;
  }

  for (const letter of ransomNote) {
    if (!record[letter]) return false;
    record[letter] -= 1;
  }

  return true;
};
