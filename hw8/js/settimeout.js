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
  }, 1000);
}
