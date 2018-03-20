var number1 = 0.31;
var number2 = 0.54;
var accuracy = 10;

var result1;
var result2;

result1 = (number1 * accuracy  + number2 * accuracy) / accuracy;
result2 = number1 + number2 // 0.85 result from calculator


if (result1 === result2) {
  console.log('Great');
}
else {
  console.log('Nope, not equal');
}

console.log(result1);
console.log(result2);