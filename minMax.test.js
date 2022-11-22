const miniMaxSum = require('./minMax');

test('miniMaxSum', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
    expect(miniMaxSum([7, 69, 2, 221, 8974])).toEqual([299, 9271]);
});