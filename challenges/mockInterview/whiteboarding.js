function matrixRowsSummed(matrix) {
  let arrayWithSummedRows = [];

  for(let i = 0; i < matrix.length; i++) {
    let acc = 0;
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === null) matrix[i][j] = 0;
      acc = acc + matrix[i][j];
    }
    arrayWithSummedRows[i] = acc;
  }

  return arrayWithSummedRows;
}

function fib(int) {
  let fibAtInt = 1;
  let previousNumber = 0;
  let nextNumber;

  if(int === 0) return 0;
  if(int === 1) return 1;

  for(let i = 2; i <= int; i++) {
    nextNumber = fibAtInt + previousNumber;
    previousNumber = fibAtInt;
    fibAtInt = nextNumber;

  }
  return fibAtInt;
}

module.exports = {
  matrixRowsSummed,
  fib
};
