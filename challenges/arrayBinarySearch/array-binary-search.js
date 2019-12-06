function binarySearch(array, searchKey) {
    let topLimit = array.length;
    let bottomLimit = 0;
    
    for(let i = 0; i < array.length / 2; i++) {
        let halfwayIndex = Math.floor((bottomLimit + topLimit) / 2);
        if(array[halfwayIndex] === searchKey) return halfwayIndex;
        if(array[halfwayIndex] > searchKey) topLimit = halfwayIndex;
        if(array[halfwayIndex] < searchKey) bottomLimit = halfwayIndex; 
    } 
    return -1;
}

module.exports = {
    binarySearch
};
