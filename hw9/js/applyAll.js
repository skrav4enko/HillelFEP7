function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    let element = arguments[i];
    result += element;
  }

  return console.log(result);

}

// sum(1,2,3);

function mul() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    result = result * element;
  }

  return console.log(result);
}

mul(1,2,3,4);