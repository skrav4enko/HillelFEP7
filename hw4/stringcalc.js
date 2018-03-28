function res(a, b, result, carry, base) {
  if(a.length == 0 && b.length == 0 && !carry)
    return result;

  //берем младшие разряды
  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  //складываем и добавляем перебор с прошлой итерации
  var l = left + right + (carry || 0);

  //вызываем для следующих разрядов, правильно вычисляя добавленную цифру и цифру переноса
  return res(a, b, l % base + (result || ""), Math.floor(l/base), base);
}

function add(a, b) {
  return res(a.toString().split(""), b.toString().split(""), "","",10).toString();
}

console.log(add(5,6));