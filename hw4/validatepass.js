validatePassword('asfart');

function validatePassword(pass) {
  // console.log(pass + '\nlength: ' + pass.length);
  if (pass.length >= 6 && pass.length <= 20) {
    console.log('VALID');
  } else {
    console.log('INVALID');
  }
}

