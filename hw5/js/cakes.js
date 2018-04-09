// Входные данные, предпологаю что они отсортированы одинаково
let recipe = {
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
// Вызов функции с передачей объектов
cakes(recipe, avalible);

function cakes(recipe, avalible) {
  let result = [];
  let number;

  // Проверяю длину объектов, если длина в рецепте больше чем доступно, то false
  if (Object.keys(recipe).length <= Object.keys(avalible).length) {
    // Прохожу по каждому ключу и выполняю вычисление
    for (let key of avalible, recipe) { 
      // Округляю вычисление к нижнему целому
      number = Math.floor(avalible[key] / recipe[key]);

      if (!isNaN(number)) {
        result.push(number)
      }
    }
    // Возвращаю минимальный результат из массива результатов
    result = Math.min(...result);
  } else {
    result = 0;
  }
  
  return console.log(result);
}