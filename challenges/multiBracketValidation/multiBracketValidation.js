function multiBracketValidation(string) {
    //let open = /[\(\{\[]/g;
    // let close = /[\)\}\]]/g;
    // let holdMyOpeners = string.match(open);
    // let holdMyClosers = string.match(close);
    // for(let i = holdMyOpeners.length; i > 0 ; i--) {
    // }
    let chars = string.split('');
    let openArray = [];
    
    for(let i = 0; i < chars.length; i++) {
        if(chars[i] === '(' || 
            chars[i] === '{' || 
            chars[i] === '[') openArray.push(chars[i]);

        if(chars[i] === ')' && openArray.pop() !== '(') return false;
        if(chars[i] === '}' && openArray.pop() !== '{') return false;
        if(chars[i] === ']' && openArray.pop() !== '[') return false;
    }

    if(openArray.length > 0) return false;
    return true;
}

module.exports = {
    multiBracketValidation
};
