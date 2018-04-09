
let recipe = {
  apple: 500,
  milk: 100,
  flour: 500,
  sugar: 200,
  eggs: 1
};

let avalible = {
  flour: 1200,
  sugar: 1200,
  eggs: 5,
  milk: 200
};

cakes(recipe, avalible);

function cakes(recipe, avalible) {
  let result = [];
  let number;

  // console.log(Object.keys(recipe).length);
  // console.log(Object.keys(avalible).length);
  if (Object.keys(recipe).length <= Object.keys(avalible).length) {
    for (let key in recipe, avalible) { 
      // console.log(recipe[key]);
      // console.log(avalible[key]);
      number = Math.floor(avalible[key] / recipe[key]);
      // console.log(number);

      if (!isNaN(number)) {
        result.push(number)
      }
    }
    // console.log(result);
    result = Math.min(...result);
    // console.log(result);
  } else {
    result = 0;
  }
  
  return console.log(result);
}