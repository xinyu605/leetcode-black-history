import { summaryRange } from './228-summary-range';

describe('Summary Range', () => {
  it('should return the smallest sorted list of ranges that cover all the numbers in the array exactly', () => {
    const result1 = summaryRange([0, 1, 2, 4, 5, 7]);
    const result2 = summaryRange([0, 2, 3, 4, 6, 8, 9]);

    expect(result1).toEqual(['0->2', '4->5', '7']);
    expect(result2).toEqual(['0', '2->4', '6', '8->9']);
  });
});
