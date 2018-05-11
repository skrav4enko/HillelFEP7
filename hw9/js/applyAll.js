let numbers;

function sum() {
  let sumResult = numbers.reduce( (total, num) => total + num);

  return sumResult;
}

function mul() {
  let mulResult = numbers.reduce( (total, num) => total * num);

  return mulResult;
}

function showResult (result) {
  console.log(result);
}

function applyAll (func) {
  numbers = [].slice.call(arguments, 1);
  console.log(func);
  console.log(numbers);
  showResult(func.apply(this, numbers));
}

applyAll(sum, 1, 2, 3);
applyAll(mul, 1, 2, 3, 4);