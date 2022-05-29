const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbersArray) {
  const total = numbersArray.reduce((total, number) => total + number, 0);
  return total;
};

const multiply = function(numbersArray) {
  const total = numbersArray.reduce((total, number) => total * number);
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let numbersArray = Array.from({length: a}, (_, i) => i + 1);
    const total = numbersArray.reduce((total, number) => total * number);
    return total;
  }
};
//could have also done this one with a for loop

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
