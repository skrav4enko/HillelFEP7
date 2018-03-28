// Вывод результата в консоль
console.log(checkNumber(197));

function checkNumber(number) {
  // Создаем массив для сохранение результатов проверки
  let result = [];
  
  console.log(Math.sqrt(number))
  // Проверка на простое число
  if (number < 2){
    result.push(false);
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        result.push(false); 
        break;
      }
      else {
        result.push(true); 
        break;
      }
    }
  }
  
  // Проверка на четность
  if (number % 2 === 0 ){
    result.push(true);
    }
  else{
    result.push(false);
  }

  // Проверка на кратность 10
  if (number % 10 === 0 ){
    result.push(true);
    }
  else{
    result.push(false);
  }

  // Возврат результата проверки
  return result;
}