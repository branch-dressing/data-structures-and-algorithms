function insertShiftArray(array, valueToBeAdded) {
    let returnArray = new Array(array.length + 1);
    let x = 0;
    const indexToAddAt = Math.ceil(array.length / 2) - 1;

    for(let i = 0; i < array.length; i++) {
        returnArray[x] = array[i];
        x++;
        if(i === indexToAddAt) {
            returnArray[x] = valueToBeAdded;
            x++;
        }
    }

    return returnArray;
}

module.exports = {
    insertShiftArray
};
