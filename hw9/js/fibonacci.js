
function fibonacci(num) {
  let fibArr = [0,1];

  if (num < 0){
    return console.log(`Wrong: number must be >= 0`)
  }
  if (num <= 1) {
    return console.log(fibArr[num]);
  }

  for (let i = 2; i <= num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  // console.log(fibArr);
  return console.log(fibArr[num]);
}

fibonacci(-2);
fibonacci(0);
fibonacci(1);
fibonacci(3);
fibonacci(6);
fibonacci(27);
