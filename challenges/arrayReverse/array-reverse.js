function reverseArray(array) {
  let newArray = new Array(array.length);
  let x = 0;
  for(let i = array.length - 1; i >= 0; i--) {
    newArray[x] = array[i];
    x++;
  }
  return newArray;
}

module.exports = {
  reverseArray
};
