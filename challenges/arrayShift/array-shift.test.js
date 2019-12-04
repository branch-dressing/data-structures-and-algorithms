const {
    insertShiftArray
} = require('./array-shift.js');

describe('Shift Array Test', () => {
    it('takes an array and a value to be insert and inserts it into the middle', () => {
        expect(insertShiftArray([1, 3], 2)).toEqual([1, 2, 3]);
        expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
});
