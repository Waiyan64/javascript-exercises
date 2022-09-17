const add = function(value1, value2) {
  return value1 + value2;
	
};

const subtract = function(value1, value2) {
  return value1 - value2;
	
};

const sum = function(value) {
  let result = 0;
	for (let i = 0; i < value.length; i++) {

    result += value[i];
  } 
  return result;
};

const multiply = function(value) {
  let result = 1;
  for (let i = 0; i < value.length; i++) {
    result *= value[i];
  }
  return result;

};

const power = function(value1, value2) {
   
  return value1 ** value2;
};

const factorial = function(value) {
  let result = 1;
  while (value >= 0) {
    if (value == 0) break;
    else result *= value;
    value--;

  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
