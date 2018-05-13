// Variant 1
let recipe = {sugar: 200, eggs: 1};
let avalible = {sugar: 1200, eggs: 5, milk: 200};
// Variant 2
// let recipe = {flour: 500, sugar: 200, eggs: 1};
// let avalible = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// Variant 3
// let recipe = {apples: 3, flour: 300, sugar: 150, milk: 1, oil: 100};
// let avalible = {sugar: 500, flour: 2000, milk: 2000};

// Вызов функции с передачей объектов
cakes(recipe, avalible);

function cakes(recipe, avalible) {
  let result = [];
  let number;

  // Проверяю длину объектов, если длина в рецепте больше чем доступно, то false
  if (Object.keys(recipe).length <= Object.keys(avalible).length) {

    // Прохожу по каждому ключу и выполняю вычисление
    for (let key in recipe) {

      // Округляю вычисление к нижнему целому
      number = Math.floor(avalible[key] / recipe[key]);

      if (!isNaN(number)) {
        result.push(number)
      } else {
        return console.log('Ingredients not the same');
      }
    }
    // Возвращаю минимальный результат из массива результатов
    result = Math.min(...result);
  } else {
    return console.log(0);
  }
  
  return console.log(result);
}