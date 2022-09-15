const repeatString = function(string, number) {
    if (number == 0) { 
        return '';
    }else if (number < 0) {
        return 'ERROR';
    } else {    
        for (let i = 1; i <= number; i++) {
            stringresult += string;
    
        }
        let stringresult2 = stringresult;
        stringresult = '';
        return stringresult2;
    };    
};
let stringresult = '';

// Do not edit below this line
module.exports = repeatString;
