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
  let timerCounter = 0;
  let minutesCounter = 0;
  // let hourCounter = 0;

  let spentTimeID = setInterval(spentTimer, 1000);

  function spentTimer() {

    if (timerCounter > 59) {
      minutesCounter++;
      timerCounter = 0;
    }
    if (minutesCounter > 59) {
      // hourCounter++;
      minutesCounter = 0;
    }

    showClock();

    timerCounter++;

    function showClock() {
      timerArea.innerHTML = `${format(minutesCounter)}: ${format(timerCounter)}`;
      // timerArea.innerHTML = `${format(hourCounter)}: ${format(minutesCounter)}: ${format(timerCounter)}`;
    }

    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }

  }

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
      timerCounter = 0;
      minutesCounter = 0;
      // hourCounter = 0;
    }
  }

});