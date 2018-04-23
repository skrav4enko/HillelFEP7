
function fibonacci() {
  let number_1 = 0;
  let number_2 = 1;
  let temp_number;
  for (let i = 0; i < arguments[0]; i++) {
    

    temp_number = number_1 + number_2;
    number_1 = number_2;
    number_2 = temp_number;
  }

  return console.log(temp_number);
}

fibonacci(6);