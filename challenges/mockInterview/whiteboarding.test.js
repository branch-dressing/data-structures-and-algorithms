const {
  matrixRowsSummed,
  fib
} = require('./whiteboarding.js');

describe('Tests whiteboarding', () => {
  it('takes a matrix and returns an array of the rows added', () => {
    expect(matrixRowsSummed([[1]])).toEqual([1]);
    expect(matrixRowsSummed([[1], [1]])).toEqual([1, 1]);
    expect(matrixRowsSummed([[1, 2, 3], [1, null, 10]])).toEqual([6, 11]);
    expect(matrixRowsSummed([[1, 2, 3], [1, null, 10], [2]])).toEqual([6, 11, 2]);

  });
});

describe('Test fib', () => {
  it('takes an int and returns that nth number of the fib', () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(8)).toEqual(21);
    expect(fib(14)).toEqual(377);
    expect(fib(45)).toEqual(1134903170);
  });
});
