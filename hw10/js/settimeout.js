// for(var i = 0; i < 10; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 10)
// }

// Solution 1
for(let i = 1; i < 11; i++) {
  count(i);
}
function count(i) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}

// Solution 2
for(var i = 1; i < 11; i++) {
  (function (i) {
    setTimeout(function() {
      console.log(i);
    }, i * 100)
  }(i));
}
