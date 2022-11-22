const TimeConversion = require('./timeConversion');

test('TimeConversion', () => {
    expect(TimeConversion('12:05:45PM')).toBe('12:05:45');
    expect(TimeConversion('12:05:45AM')).toBe('00:05:45');
    expect(TimeConversion('07:05:45PM')).toBe('19:05:45');
    expect(TimeConversion('07:05:45AM')).toBe('07:05:45');
}
);