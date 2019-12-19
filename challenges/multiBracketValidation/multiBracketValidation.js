function multiBracketValidation(string) {
    let chars = string.split('');
    let openers = ['(', '{', '['];
    let closers = [')', '}', ']'];
    let openArray = [];
    
    for(let i = 0; i < chars.length; i++) {
        if(openers.includes(chars[i])) openArray.push(chars[i]);

        if(closers.includes(chars[i]) && openArray > 0) return false;

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
