var string;

string = 'Введите строку';
// string = prompt('Введите строку', 'Hello world');

if (string === '') {
  console.log('Вы ничего не ввели. Строка пуста.')
} else if (string.length < 10) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
} else {
  console.log(string.substring(0,7));
  console.log(string.substr(9));
}
