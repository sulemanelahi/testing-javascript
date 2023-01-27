const sum = (firstNumber, secondNumber) => firstNumber - secondNumber; //BUG
const substract = (firstNumber, secondNumber) => firstNumber - secondNumber;

let result = sum(11, 4);
let expected = 15;

if (result !== expected) {
  throw new Error(`Addition Result (${result}) is not equal to Expected (${expected})`);
}

result = substract(11, 4);
expected = 7;

if (result !== expected) {
  throw new Error(`Substraction Result (${result}) is not equal to Expected (${expected})`);
}