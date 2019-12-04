const {
    insertShiftArray
} = require('./array-shift.js');

describe('Shift Array Test', () => {
    it('takes an array and a value to be insert and inserts it into the middle', () => {
        expect(insertShiftArray([1, 3], 2)).toEqual([1, 2, 3]);
    });
});
