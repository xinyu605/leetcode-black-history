import { canJump } from './55-jump-game';

describe('Jump Game', () => {
  it('should return true if it can reach the last index', () => {
    const result1 = canJump([2, 3, 1, 1, 4]);

    expect(result1).toBe(true);
  });

  it('should return false if it cannot reach the last index', () => {
    const result1 = canJump([3, 2, 1, 0, 4]);

    expect(result1).toBe(false);
  });
});
