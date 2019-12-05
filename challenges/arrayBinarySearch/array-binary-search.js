function binarySearch(array, searchKey) {
    let topLimit = array.length;
    let bottomLimit = 0;
    let halfwayIndex = Math.floor(array.length / 2);
    
    let i = 0;
    while(i < array.length) {
        if(array[halfwayIndex] === searchKey) {
            return halfwayIndex;
        } else if(array[halfwayIndex] > searchKey) {
            topLimit = halfwayIndex;
            
        } else if(array[halfwayIndex] < searchKey) {
            bottomLimit = halfwayIndex; 
        }
        halfwayIndex = Math.floor((bottomLimit + topLimit) / 2);
        i++;
    }
    
    return -1;
}

module.exports = {
    binarySearch
};
