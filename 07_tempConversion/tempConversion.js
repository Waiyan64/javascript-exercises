const ftoc = function(value) {
  let convertedValue = (value - 32) * 5/9;
  let rounded = Math.round(convertedValue * 10)/10;
  return rounded;
};

const ctof = function(value) {
  let convertedValue = (value * 9/5) + 32;
  let rounded = Math.round(convertedValue * 10)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
