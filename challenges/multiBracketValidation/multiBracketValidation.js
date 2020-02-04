function multiBracketValidation(stringToValidate) {
  let response = true;
  const openers = ['(', '{', '['];
  const openersArray = [];

  stringToValidate
    .match(/[{}[\]()]/g)
    .forEach(bracket => {
      if(openers.includes(bracket)) openersArray.push(bracket);

      if(bracket === ')' && openersArray.pop() !== '(') response = false;
      if(bracket === '}' && openersArray.pop() !== '{') response = false;
      if(bracket === ']' && openersArray.pop() !== '[') response = false;
    });

  if(openersArray[0]) response = false;
  return response;
}

module.exports = {
  multiBracketValidation
};
