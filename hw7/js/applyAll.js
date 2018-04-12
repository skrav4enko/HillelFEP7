function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    let element = arguments[i];
    result += element;
  }

  return console.log(result);

}

sum(1,2,3);

