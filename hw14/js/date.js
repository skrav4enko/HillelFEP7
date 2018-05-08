
document.addEventListener('DOMContentLoaded', () => {
  
  const clockArea = document.querySelector('#clock-area');
  const timerArea = document.querySelector('#timer-area');

  let date = new Date();
  
  clock();
  // spentTime();

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

  function spentTime() {
    let currentDate = new Date();

    let spentTime = currentDate - date;
    let hours = spentTime.getHours();
    let minutes = spentTime.getMinutes();
    let seconds = spentTime.getSeconds();

    setTimeout(spentTime, 1000);
    
    showClock();
    
    function showClock() {
      timerArea.innerHTML = `You spent ${format(hours)}: ${format(minutes)}: ${format(seconds)} on this site`;
    }

    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }
  }
});