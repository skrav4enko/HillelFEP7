
document.addEventListener('DOMContentLoaded', () => {
  
  const clockArea = document.querySelector('#clock-area');
  const timerArea = document.querySelector('#timer-area');
  // console.log(clockArea);
  // console.log(timerArea);
  
  let clockId = setInterval(clock, 1000);

  // Clock
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

  // Timer
  let currentDate = new Date();

  let spentTimeID = setInterval(spentTimer, 1000);

  function spentTimer() {
    let timer = updateTimer(currentDate);
    
    showClock();
  
    function showClock() {
      // console.log(`You spent ${format(timer.hours)}: ${format(timer.minutes)}: ${format(timer.seconds)} on this site`);
      timerArea.innerHTML = `${format(timer.hours)}: ${format(timer.minutes)}: ${format(timer.seconds)}`;
    }
  
    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }
  }

  function updateTimer(currentDate){
    let spentTimer = new Date() - currentDate;

    return {
      'hours': Math.floor( (spentTimer/(1000*60*60)) % 24 ),
      'minutes': Math.floor( (spentTimer/1000/60) % 60 ),
      'seconds': Math.floor( (spentTimer/1000) % 60 ),
      'total' : spentTimer
    };
  }
  // console.log(spentTimeID);

  timerArea.addEventListener('mouseover', pauseSpentTimer);
  timerArea.addEventListener('mouseout', startSpentTimer);
  document.addEventListener('keydown', setSpentTimerToZero);
  function startSpentTimer(e) {
    if (e.target) {
      spentTimeID = setInterval(spentTimer, 1000);
    }
  }
  function pauseSpentTimer(e) {
    if (e.target) {
      clearInterval(spentTimeID);
    }
  }
  function setSpentTimerToZero(e) {
    if (e.keyCode === 27) {
      currentDate = new Date();
    }
  }
});