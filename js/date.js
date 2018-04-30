
window.onload = function() {

  let clockArea = document.querySelector('#clock-area');
  clock();

  function clock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    clockArea.innerHTML = `${format(hours)}: ${format(minutes)}: ${format(seconds)}`;
    let period = setTimeout(clock, 1000);
  
    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    };
  };

  // function timeSpent() {
    
  // }
};