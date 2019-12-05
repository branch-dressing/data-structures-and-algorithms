const {
    binarySearch
} = require('./array-binary-search.js');

describe('Tests Array Binary Search', () => {
    it('takes array and search value, returns index of searched item', () => {
        expect(binarySearch([1], 1)).toEqual(0);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 4)).toEqual(0);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 8)).toEqual(1);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 16)).toEqual(3);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 23)).toEqual(4);
        expect(binarySearch([4, 8, 15, 16, 23, 42], 42)).toEqual(5);
        expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
        expect(binarySearch([2, 4, 8, 10, 12, 15, 16, 23, 42], 23)).toEqual(7);
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30)).toEqual(30);
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 2)).toEqual(2);
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 12)).toEqual(12);
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 27)).toEqual(27);
        expect(binarySearch([], 10)).toEqual(-1);
    });
});

