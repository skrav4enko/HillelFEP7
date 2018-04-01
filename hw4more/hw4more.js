

let password;
let number;
do {
  password = prompt('Введите пароль:', 'TcSf12y');
} while (validatePassword(password) === false);

do {
  number = prompt('Введите любое число', '23');
} while (checkNumber(number) === false);

// // Сложение чисел введеных пользователем
let term1 = prompt('Введите первое число', '878945164511195195159151911981');
let term2 = prompt('Введите первое число', '656294157127617291451897417218');
sumStringNumber(term1, term2);

// Функция проверки пароля
function validatePassword(pass) {
    
  console.log(pass + ' length: ' + pass.length); // проверочный вывод строки и ее длины
  
  function checkPassLength(pass) {
    let result;
    if (pass.length >= 6 && pass.length <= 20) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  function checkPassAlphanumeric(pass) {
    let result1;
    let result2;
    let result3;

    for (let i = 0; i < pass.length; i++) {
      let e = pass.charCodeAt(i);
      if (e < 48 || e > 57 && e < 65 || e > 90 && e < 97 || e > 122 ) {
        result1 =  false; break;
      } else {
        result1 =  true;
      }
    }

    for (let i = 0; i < pass.length; i++) {
      let e = pass.charCodeAt(i);
      if (e < 48 || e > 57) {
        result2 =  false; 
      } else {
        result2 =  true; break;
      }
    }

    for (let i = 0; i < pass.length; i++) {
      let e = pass.charCodeAt(i);
      if (e < 65 || e > 90 && e < 97 || e > 122 ) {
        result3 =  false; 
      } else {
        result3 =  true; break;
      }
    }
    return (result1 && result2 && result3)
      ? true 
      : false;
  }
  
  // TODO возврат true, false
  return (checkPassLength(pass) && checkPassAlphanumeric(pass))
    ? true
    : false;
}

// Функция проверки числа
function checkNumber(number) {
  // Создаем массив для сохранение результатов проверки
  // let resultTotal = [];
  // resultTotal = [isPrime(number), isEven(number), isMultipleOf10(number) ];
  // console.log(resultTotal);
  
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
  return (isPrime(number) || isEven(number) || isMultipleOf10(number))
    ? true
    : false;
}

// // Функция проверки аргументов на ноль
function sumStringNumber(a, b) {
  if (a === '0' && b === '0') {
    return '0';
  }
  
  // обращаемся к функции сложения, передаем аргументы приводя их к массиву
  return add(a.split(''), b.split(''));

    // Функция сложения каждого элемента массива
  function add(a, b, result = '', carry = 0) {
    // Проверка, что массив еще с элементами, если нет то выводим результат
    if (!(a.length || b.length || carry)) {
      return alert(`Результат: ${result}`);
    }
    // Убираем с массивов последний элемент, если его нет возвращаем 0, приводим к числу
    let left = parseInt(a.pop() || '0', 10);
    let right = parseInt(b.pop() || '0', 10);

    // Промежуточный результат двух элементов и десятка (если был)
    carry = carry + left + right;
    // Остаток от кратности 10 и конкатенируем с результату 
    result = carry % 10 + result;
    // Проверка промежуточного результата ( >= 10 - true, иначе false)
    carry = carry > 9;

    // Повторяем цикл
    return add(a, b, result, carry);
  }
}