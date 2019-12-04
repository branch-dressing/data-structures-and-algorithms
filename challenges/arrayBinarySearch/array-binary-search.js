function binarySearch(array, searchKey) {
    let indexSearchedKey = -1;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === searchKey) {
            indexSearchedKey = i;
            break;
        }
    }
    
    return indexSearchedKey;
}

module.exports = {
    binarySearch
};
