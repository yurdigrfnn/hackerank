const staircase = require('./stairCase');

test('stairCase', () => {
    expect(staircase(6)).toEqual('     #');
    expect(staircase(10)).toEqual('         #');
});