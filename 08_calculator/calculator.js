const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	let result = 0;
  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  return result;
};

const multiply = function() {
  let array = Array.from(arguments);
  if(array.length>0){
    return array.reduce((a,b)=> a*b,1);
  }
  else{
    return 0;
  }
};

const power = function(number,power) {
  let result = 1;
	for (let index = 0; index < power; index++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	let result = 1
  if(number === 0 || number === 1){
    return result;
  }
  for (let index = number; index >= 1; index--) {
    result *= index;
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
