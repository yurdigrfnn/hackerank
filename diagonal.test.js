const diagonal = require('./diagonalDif');
test('diagonal', () => {
    expect(diagonal([[1, 2, 3], [4, 5, 6], [9, 8, 9]])).toBe(2);
    expect(diagonal([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toBe(15);
});