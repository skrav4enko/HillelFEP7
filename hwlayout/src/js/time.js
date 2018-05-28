
function Clock() {
  /* ---CLOCK--- */

  const clockArea = document.querySelector('#clock-area');

  const clockId = setInterval(clock, 1000);

  function clock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    setTimeout(clock, 1000);

    showClock();

    function showClock() {
      clockArea.innerHTML = `${format(hours)}: ${format(minutes)}: ${format(seconds)}`;
    }

    function format(number) {
      let num = number;
      if (num < 10) {
        num = `0${num}`;
      }
      return num;
    }
  }
}

/* ---CLOCK END--- */

/* ---TIMER--- */

function Timer() {
  const timerArea = document.querySelector('#timer-area');

  let timerCounter = 0;
  let minutesCounter = 0;
  // let hourCounter = 0;

  let spentTimeID = setInterval(spentTimer, 1000);

  function spentTimer() {
    if (timerCounter > 59) {
      minutesCounter += 1;
      timerCounter = 0;
    }
    if (minutesCounter > 59) {
      // hourCounter++;
      minutesCounter = 0;
    }

    showClock();

    timerCounter += 1;

    function showClock() {
      timerArea.innerHTML = `${format(minutesCounter)}: ${format(timerCounter)}`;
    }

    function format(number) {
      let num = number;
      if (num < 10) {
        num = `0${num}`;
      }
      return num;
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

  /* ---TIMER END--- */
}

export { Clock, Timer };
