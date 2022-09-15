const reverseString = function(string) {
    let i = string.length -1;
    while (i >= 0) {
        stringreversed += string[i];
        i--;
        
    }
    let stringreversed2 = stringreversed;
    stringreversed = '';
    return stringreversed2;

};
let stringreversed = '';

// Do not edit below this line
module.exports = reverseString;
