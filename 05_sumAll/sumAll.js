const sumAll = function(value1, value2) {
    let sum = 0;
    if (value1 < 0 || value2 < 0) return 'ERROR';
    else if (!Number.isInteger(value1) || !Number.isInteger(value2)) return 'ERROR';
    else if (value2 > value1 ) {
        for (i =  value1; i <= value2; i++) {
            sum += i;
        }; return sum;
    } else if ( value1 > value2 ) {
        for (i =  value2; i <= value1; i++) {
            sum += i;
        }; return sum;
    } else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
