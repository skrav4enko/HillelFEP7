
document.addEventListener('DOMContentLoaded', () => {
  
  const clockArea = document.querySelector('#clock-area');
  
  clock();

  function clock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    setTimeout(clock, 1000);
    
    showClock();
    
    function showClock() {
      clockArea.innerHTML = `${format(hours)}: ${format(minutes)}: ${format(seconds)}`;
    }

    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }
  }
});