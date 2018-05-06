var password = 'TcSf12y';

validatePassword(password) 
  ? console.log('VALID') 
  : console.log('INVALID');

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
  
  return (checkPassLength(pass) && checkPassAlphanumeric(pass))
    ? true
    : false;
}