const birthdayCakeCandles = require('./brithdayCake');

test('birthdayCakeCandles', () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toEqual(2);
    expect(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])).toEqual(5);
});