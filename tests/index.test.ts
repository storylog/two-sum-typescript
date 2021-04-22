import { twoSum } from '../src/twoSum';

describe('twoSum(nums: number[], target: number): number[]', () => {
  const inout: [number[], number, number[]][] = [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8], 15, [7, 8]],
    [[-10, 1, 1, 1, 1, 1, 1, 1, 10], 0, [0, 8]],
    [[5, 4, 2, 6], 10, [1, 3]],
  ];

  for (let i = 0; i < inout.length; i++) {
    it(`nums = ${inout[i][0]}, target = ${inout[i][1]} should return ${inout[i][2]})`, () => {
      expect(twoSum(inout[i][0], inout[i][1])).toEqual(inout[i][2]);
    });
  }
});
