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
    let temp;

    if(int === 0) return 0;
    if(int === 1) return 1;

    for(let i = 2; i <= int; i++) {
        temp = fibAtInt + previousNumber;
        previousNumber = fibAtInt;
        fibAtInt = temp;

    }
    return fibAtInt;
}

module.exports = {
    matrixRowsSummed,
    fib
};

// test would look isPatternLike

// [[1]] expecty [1]
// [[1], [2]] expect [1, 2]
// [[1, 2]] expect [3]
// [[1, 2], [3, 4]] expect [3, 7] 
