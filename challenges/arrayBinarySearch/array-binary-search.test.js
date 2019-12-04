const {
    binarySearch
} = require('./array-binary-search.js');

describe('Tests Array Binary Search', () => {
    it('takes array and search value, returns index of searched item', () => {
        expect(binarySearch([1], 1)).toEqual(0);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    });
});

