function binarySearch(array, searchKey) {
    let halfwayIndex = Math.floor(array.length / 2);
    let topLimit = array.length;
    let bottomLimit = 0;
    
    while(topLimit - bottomLimit >= 0) {
        if(array[halfwayIndex] === searchKey) {
            return halfwayIndex;
        } else if(array[halfwayIndex] > searchKey) {
            topLimit = halfwayIndex;
            
        } else if(array[halfwayIndex] < searchKey) {
            bottomLimit = halfwayIndex; 
        }
        halfwayIndex = Math.floor((bottomLimit + topLimit) / 2);
    }
    
    return -1;
}

module.exports = {
    binarySearch
};
