let number = 3;

// Проверка результата в консоль
checkNumber(number);

// Функция проверки числа
function checkNumber(number) {
  // Создаем массив для сохранение результатов проверки
  
  let resultTotal = [isPrime(number), isEven(number), isMultipleOf10(number)];

  // Проверка на простое число
  function isPrime(number) {
    let result;

    if (number < 2){
      result = false;
    } else if (number == 2 || number == 3){
      result = true;
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
          result = false; break;
        }
        else {
          result = true;
        }
      }
    }
    return result;
  }

  // Проверка на четность
  function isEven(number) {
    let result;
    if (number % 2 == 0 ){
      result = true;
    } else{
      result = false;
    }
    return result;
  }

  // Проверка на кратность 10
  function isMultipleOf10(number) {
    let result;
    if (number % 10 == 0 ){
      result = true;
    } else{
      result = false;
    }
    return result;
  }

  // Возврат результата проверки
  return console.log(resultTotal);
  // return console.log(`Number ${number} prime/even/multiplerOf10 - ${resultTotal}`);
}