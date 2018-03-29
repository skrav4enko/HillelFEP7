var password = 'TcSf12y';

function validatePassword(pass) {
  // Инициализация переменной для результата функции
  let result;
  
  // console.log(pass + ' length: ' + pass.length); // проверочный вывод строки и ее длины
  
  // Начальная проверка пароля на длину
  if (pass.length >= 6 && pass.length <= 20) {
    // РАБОТАЕТ! Проверка пароля регулярным выражением
    // let reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    // reg.test(pass) 
    //   ? result = true 
    //   : result = false;
    
    // Проверка пароля посимвольно ..запутаный вариант
    for (let i = 0; i < pass.length; i++) {
      let e = pass.charCodeAt(i);
      if (e < 48 || e > 57 && e < 65 || e > 90 && e < 97 || e > 122 ) {
        result =  false; // Если хоть один символ не цифра ил буква, то false
        break;  // Прерывание работы цикла при первом false
      } else {
        result =  true;
      }
    }
  } else {
    result = false; // Если пароль не прошел по длине
  }
  return result;  // Возврат результата выполнения функции
}

validatePassword(password) 
  ? console.log('VALID') 
  : console.log('INVALID');