/* This is the mathOperators.js file that defines functions for arithmetic operations and performs them on
an array of integers, logging the results.
Here are a few sources that helped me achieve this:
 - HyerionDev Functions, Scope and Closures pdf and examples
 - https://www.w3schools.com/js/js_operators.asp
For more information about this please visit https://github.com/IronMike4/functions_scope_closures.git */

// Defining a function findSum that takes an array of integers and returns their sum.
function findSum(numbersArray) {
  let sum = 0;
  for (let num of numbersArray) {
    sum += num;
  }
  return sum;
}

// Defining a function subtractNumbers that subtracts the second number from the first number.
function subtractNumbers(a, b) {
  return a - b;
}

// Defining a function multiplyNumbers that multiplies two numbers.
function multiplyNumbers(a, b) {
  return a * b;
}

// Defining a function divideNumbers that divides the first number by the second number,
// handling the case where the second number is 0.
function divideNumbers(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a / b;
}

// Creating an array with 3 integers
const integers = [15, 6, 3];

// Invoking the findSum function with the array and log its return value.
console.log("Sum of integers:", findSum(integers));

// Invoking subtractNumbers with the first and second numbers from the array, then log its return value.
console.log(
  "Result of subtraction:",
  subtractNumbers(integers[0], integers[1])
);

// Invoking multiplyNumbers to multiply the third integer by the first integer from the array,
// then log the result.
console.log(
  "Result of multiplication:",
  multiplyNumbers(integers[2], integers[0])
);

// Invoking divideNumbers with the sum of all three integers calculated by findSum,
// along with the third integer from the array and output the result.
const sumOfIntegers = findSum(integers);
console.log("Result of division:", divideNumbers(sumOfIntegers, integers[2]));
