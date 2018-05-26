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

  /* ---MAIN PAGE--- */

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

  /* ---MAIN PAGE END--- */

  /* ---TABLE GENERATOR--- */

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
    <button id="btnTable" class="btn btn-primary mb-3">Draw Table</button>
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
    let btn = document.querySelector('#btnTable');

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
      tableArea
        .appendChild(table)
        .classList.add('table', 'table-striped', 'table-bordered');
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
            alert(
              `Index of cell is: ${this.cellIndex + 1}:${this.parentNode
                .rowIndex + 1}`
            );
          };
        }
      }
    }
  }

  /* ---TABLE GENERATOR END--- */

  /* ---CLOCK--- */

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
      clockArea.innerHTML = `${format(hours)}: ${format(minutes)}: ${format(
        seconds
      )}`;
    }

    function format(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }
  }

  /* ---CLOCK END--- */

  /* ---WINDOW SIZE--- */

  let windowSizeArea = document.querySelector('#window-size');
  showWindowSize();

  function showWindowSize() {
    windowSizeArea.innerHTML = `${window.innerWidth} x ${
      window.innerHeight
    } px`;
  }

  window.addEventListener('resize', resize);

  function resize() {
    clearTimeout(window.resizeEnd);
    window.resizeEnd = setTimeout(showWindowSize, 2000);
  }

  /* ---WINDOW SIZE END--- */

  /* ---TIMER--- */

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
      timerArea.innerHTML = `${format(minutesCounter)}: ${format(
        timerCounter
      )}`;
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

  /* ---TIMER END--- */

  /* ---SLIDER 1 & 2--- */

  const sliderLink = document.querySelector('#slider-link');

  let sliderHead = `<h2>Slider</h2>`;
  let sliderMain = `<div class="carousel-item active">
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
    `;
  let sliderButtons = `<a class="carousel-control-prev" data-slide="prev">
      <span class="carousel-control-prev-icon"></span></a>
    <a class="carousel-control-next" data-slide="next">
      <span class="carousel-control-next-icon"></span></a>`;


  let templateAutoSlider = `${sliderHead}<div class="slideshow-container">${sliderMain}</div>`;

  sliderLink.addEventListener('click', slider);

  class Slider {
    constructor(template, slider, auto){
      this.auto = auto;
      this.template = template;
      this.slider = slider;
    }
    nextSlide(){

    }
    prevSlide(){

    }
  }

  function slider(e) {
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

  /* ---SLIDER 1 END--- */

  /* ---PROMISES 1 & 2--- */

  const progressLink = document.querySelector('#progress-link');
  const progress1Link = document.querySelector('#progress1-link');

  let progressHeader = `<h2>Progress on Promises</h2>`;
  let progressBar = `<div class="progress"><div class="progress-bar""></div></div>`;
  let articleContent = `<div class="card mb-3">
      <img class="card-img" src="./img/std/js_logo.png">
      <div class="card-body">
      <h3 class="card-title">Lorem</h3>
      <p class="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>`;

  let progressTemplate = `${progressHeader}${progressBar}
  ${articleContent}${articleContent}${articleContent}`;

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

  /* ---PROMISES 1 & 2 END--- */

  /* ---AUTOCOMPLETE--- */

  let cityInput = document.querySelector('#searchCity');
  let autocomplete = new google.maps.places.Autocomplete(cityInput);
  // console.log(autocomplete);
  // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=input&types=geocode&key=API_KEY

  /* ---AUTOCOMPLETE END--- */

  /* ---WEATHER--- */

  let wbtn = document.querySelector('#getCity');
  let forecastHeader = document.querySelector('#forecast-header');
  wbtn.addEventListener('click', getWeather);

  google.maps.event.addListener(autocomplete, 'place_changed', () => {});

  // let apiSettings = {
  //   api: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast',
  //   api_key: '1d7c5926d49fd65897f928d403fc5251',
  //   lang: 'ru',
  //   units: 'si',
  //   exclude: 'minutely,hourly,daily,alerts,flags',
  //   cors_hack: 'https://cors-anywhere.herokuapp.com/'
  // };
  // let { api, api_key, lang, units, exclude, cors_hack } = apiSettings;

  let apiSettings = {
    api: 'http://api.openweathermap.org/data/2.5/weather',
    api_key: 'be69c9c340c7433ef933d94b2c2db766',
    lang: 'ru',
    units: 'metric'
  };
  let { api, api_key, lang, units } = apiSettings;

  function getWeather(e) {
    e.preventDefault();
    let lat = autocomplete.getPlace().geometry.location.lat();
    let lng = autocomplete.getPlace().geometry.location.lng();
    // console.log(lat, lng);

    let url = `${api}?lat=${lat}&lon=${lng}&lang=${lang}&units=${units}&appid=${api_key}`;
    // console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let templateForecastHeader = `<span>${data.name}</span><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" title="${data.weather[0].description}"><span>${Math.round(data.main.temp)} &deg;С</span>`;
        forecastHeader.innerHTML = templateForecastHeader;
        cityInput.value = '';
        console.log(data);
      })
      .catch(err => console.log(err));

    // let url = `${cors_hack}${api}/${api_key}/${lat},${lng}?units=${units}&lang=${lang}&exclude=${exclude}`;
    // console.log(url);
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }

  /* ---WEATHER END--- */
});