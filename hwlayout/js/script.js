document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');
  
  function clearContent() {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild);
    }
  }

  function insertContent(template) {
    clearContent();
    mainSection.innerHTML = template;
  }

  /* MAIN PAGE */

  const mainLink = document.querySelector('#main-link');
  mainLink.addEventListener('click', mainPage);

  let mainTemplate = `<h2>Main Content</h2>
  <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium repellendus fuga totam recusandae deserunt nobis! Ipsam, ipsum aliquam quidem, quaerat saepe odit eveniet atque velit quas at sint tenetur maiores aperiam laboriosam ab alias et nulla perspiciatis culpa enim minus eaque cum libero. Enim facilis eveniet reprehenderit fuga ipsam sint mollitia iusto repudiandae rerum?</p>`;

  insertContent(mainTemplate);

  function mainPage(e) {
    e.preventDefault();
    insertContent(mainTemplate);
    return false;
  }

  /* MAIN PAGE END */

  /* TABLE GENERATOR */

  const tableLink = document.querySelector('#table-link');
  tableLink.addEventListener('click', tableGenerator);

  let templateTable = `<h2>Create Table</h2>
    <form class="row">
    <div class="form-group col">
      <label for="row-input">Number of
        <strong>rows</strong> you want</label>
      <input id='row-input' type="number" class="form-control" min="0">
    </div>
    <div class="form-group col">
      <label for="column-input">Number of
        <strong>columns</strong> you want</label>
      <input id='column-input' type="number" class="form-control" min="0">
    </div>
    </form>
    <button type="submit" class="btn btn-primary mb-3">Draw Table</button>
    <div id="table-area"></div>`;

  function tableGenerator(e) {
    e.preventDefault();
    insertContent(templateTable);
    createTable();
    return false;
  }

  function createTable() {

    let inputRowNumber = document.querySelector('#row-input');
    let inputColumnNumber = document.querySelector('#column-input');
    let btn = document.querySelector('button');

    btn.addEventListener('click', drawTable);

    function drawTable() {
      // console.log(`Row: ${inputRowNumber.value} and Column: ${inputColumnNumber.value}`);
      let tableArea = document.querySelector('#table-area');

      // Проверка на существующую таблицу
      while (tableArea.firstChild) {
        tableArea.removeChild(tableArea.firstChild); // удалить при обнаружении
      }

      let table = document.createElement('table');
      let cellNumber = 1;
      for (let i = 0; i < inputRowNumber.value; i++) {
        let row = table.insertRow();
        for (let j = 0; j < inputColumnNumber.value; j++) {
          let cell = row.insertCell();
          cell.appendChild(document.createTextNode(`Cell ${cellNumber++}`));
        }
      }
      tableArea.appendChild(table).classList.add('table', 'table-striped', 'table-bordered');
      inputRowNumber.value = '';
      inputColumnNumber.value = '';
      // console.log(document.querySelector('table'));

      showCellNumber();

      function showCellNumber() {
        let cells = tableArea.getElementsByTagName('td');

        for (let i = 0; i < cells.length; i++) {
          // Cell Object
          let cell = cells[i];
          // Track with onclick
          cell.onclick = function () {
            alert(`Index of cell is: ${this.cellIndex + 1}:${this.parentNode.rowIndex + 1}`);
          };
        }
      }
    }
  }

  /* TABLE GENERATOR END */
  
  /* CLOCK */

  const clockArea = document.querySelector('#clock-area');

  let clockId = setInterval(clock, 1000);

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

  /* CLOCK END */

  /* WINDOW SIZE */

  let windowSizeArea = document.querySelector('#window-size');
  showWindowSize();

  function showWindowSize() {
    windowSizeArea.innerHTML = `${window.innerWidth} x ${window.innerHeight} px`;
  }

  window.addEventListener('resize', resize);
  
  function resize() {
    clearTimeout(window.resizeEnd);
    window.resizeEnd = setTimeout(showWindowSize, 2000); 
  }
  
  /* WINDOW SIZE END */
  
  /* TIMER */

  const timerArea = document.querySelector('#timer-area');

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

  /* TIMER END*/

  /* SLIDER 1 & 2 */

  const sliderLink = document.querySelector('#slider-link');

  let templateAutoSlider = `<h2>Infinite Slideshow</h2>
    <div class="slideshow-container">
      <div class="carousel-item active">
        <img class="d-block w-100" src="./img/pexels-photo-01.jpeg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./img/pexels-photo-02.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./img/pexels-photo-03.jpeg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./img/pexels-photo-04.jpeg" alt="Fourth slide">
      </div>
      <div class="carousel-item">
        <img class="w-100" src="./img/pexels-photo-05.jpeg" alt="Fifth slide">
      </div>
    </div>`;

  sliderLink.addEventListener('click', slider1);

  function slider1(e) {
    e.preventDefault();
    insertContent(templateAutoSlider);
    autoSlider();
    return false;
  }

  function autoSlider() {
    
    let slides = document.querySelectorAll('.carousel-item');

    let currentSlide = 0;
    let slideInterval = setInterval(autoplaySlide, 3000);
    // console.log(slides);

    function autoplaySlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  }

  /* SLIDER 1 END */

  /* PROMISES 1 & 2 */

  const progressLink = document.querySelector('#progress-link');
  const progress1Link = document.querySelector('#progress1-link');

  let progressTemplate = `<h2>Progress on Promises</h2>
  <div class="progress">
      <div class="progress-bar""></div>
    </div>
  </div>
  <div id="articles" class="content-articles">
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/std/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/std/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/std/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
  </div>`;

  progressLink.addEventListener('click', progress);
  progress1Link.addEventListener('click', progress1);

  function progress(e) {
    e.preventDefault();
    insertContent(progressTemplate);
    let progressbar = document.querySelector('.progress-bar');
    progressbar.addEventListener('animationend', progressClear);
    return false;
  }
  function progress1(e) {
    e.preventDefault();
    insertContent(progressTemplate);
    let progressbar = document.querySelector('.progress-bar');
    progressbar.addEventListener('animationend', progress1Clear);
    return false;
  }

  function progressClear() {
    console.log('Anim End');
  }

  function progress1Clear() {
    console.log('Anim End 2');
  }

  /* PROMISES 1 & 2 END*/

  /* AUTOCOMPLETE */

  let wbtn = document.querySelector('#getCity');
  let city = document.querySelector('#searchCity');
  var input = document.querySelector('#searchCity');
  let autocomplete = new google.maps.places.Autocomplete(input);

  // let gSettings = {
  //   API_KEY: 'AIzaSyCCqmHLokHdtgKi_orDLfS0iGMcGUDGCMU'
  // };

  /* WEATHER */

  // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=input&types=geocode&key=API_KEY


  /* WEATHER END*/


});