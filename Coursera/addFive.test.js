const {default: TestRunner} = require("jest-")
const addFive = require('./24_testing.js');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6)
});