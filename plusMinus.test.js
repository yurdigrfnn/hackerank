// test plusMinus
const plusMinus = require('./plusMinus');
test('plusMinus', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toBe("0.500000,0.333333,0.166667");
    expect(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])).toBe("0.375000,0.375000,0.250000");
});