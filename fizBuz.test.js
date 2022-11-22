const fizBuzz = require('./fizBuz');

test('fizBuzz', () => {
    expect(fizBuzz(3)).toBe('fiz');
    expect(fizBuzz(5)).toBe('buz');
    expect(fizBuzz(15)).toBe('fizbuz');
    expect(fizBuzz(7)).toBe(7);
});