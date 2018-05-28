export default function Main() {
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

    const mainTemplate = `<h2>Main Content</h2>
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

    const templateTable = `<h2>Create Table</h2>
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
      const inputRowNumber = document.querySelector('#row-input');
      const inputColumnNumber = document.querySelector('#column-input');
      const btn = document.querySelector('#btnTable');

      btn.addEventListener('click', drawTable);

      function drawTable() {
        // console.log(`Row: ${inputRowNumber.value} and Column: ${inputColumnNumber.value}`);
        const tableArea = document.querySelector('#table-area');

        // Проверка на существующую таблицу
        while (tableArea.firstChild) {
          tableArea.removeChild(tableArea.firstChild); // удалить при обнаружении
        }

        const table = document.createElement('table');
        let cellNumber = 1;
        for (let i = 0; i < inputRowNumber.value; i++) {
          const row = table.insertRow();
          for (let j = 0; j < inputColumnNumber.value; j++) {
            const cell = row.insertCell();
            cell.appendChild(document.createTextNode(`Cell ${cellNumber += 1}`));
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
          const cells = tableArea.getElementsByTagName('td');

          for (let i = 0; i < cells.length; i++) {
            // Cell Object
            const cell = cells[i];
            // Track with onclick
            cell.onclick = function () {
              alert(`Index of cell is: ${this.cellIndex + 1}:${this.parentNode
                .rowIndex + 1}`);
            };
          }
        }
      }
    }

    /* ---TABLE GENERATOR END--- */

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

    /* ---CLOCK END--- */

    /* ---WINDOW SIZE--- */

    const windowSizeArea = document.querySelector('#window-size');
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

    /* ---SLIDER 1 & 2--- */

    const sliderLink = document.querySelector('#slider-link');

    const sliderHead = '<h2>Slider</h2>';
    const sliderMain = `<div class="carousel-item active">
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
    const sliderButtons = `<a class="carousel-control-prev" data-slide="prev">
        <span class="carousel-control-prev-icon"></span></a>
      <a class="carousel-control-next" data-slide="next">
        <span class="carousel-control-next-icon"></span></a>`;


    const templateAutoSlider = `${sliderHead}<div class="slideshow-container">${sliderMain}</div>`;

    sliderLink.addEventListener('click', slider);

    // class Slider {
    //   constructor(template, slider, auto) {
    //     this.auto = auto;
    //     this.template = template;
    //     this.slider = slider;
    //   }
    //   nextSlide() {

    //   }
    //   prevSlide() {

    //   }
    // }

    function slider(e) {
      e.preventDefault();
      insertContent(templateAutoSlider);
      autoSlider();
      return false;
    }

    function autoSlider() {
      const slides = document.querySelectorAll('.carousel-item');

      let currentSlide = 0;
      const slideInterval = setInterval(autoplaySlide, 3000);
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

    const progressHeader = '<h2>Progress on Promises</h2>';
    const progressBar = '<div class="progress"><div class="progress-bar""></div></div>';
    const articleContent = `<div class="card mb-3">
        <img class="card-img" src="./img/js_logo.png">
        <div class="card-body">
        <h3 class="card-title">Lorem</h3>
        <p class="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
            laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
            Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
        </div>
      </div>`;

    const progressTemplate = `${progressHeader}${progressBar}
    ${articleContent}${articleContent}${articleContent}`;

    progressLink.addEventListener('click', progress);
    progress1Link.addEventListener('click', progress1);

    function progress(e) {
      e.preventDefault();
      insertContent(progressTemplate);
      const progressbar = document.querySelector('.progress-bar');
      progressbar.addEventListener('animationend', progressClear);
      return false;
    }

    function progress1(e) {
      e.preventDefault();
      insertContent(progressTemplate);
      const progressbar = document.querySelector('.progress-bar');
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

    const cityInput = document.querySelector('#searchCity');
    const autocomplete = new google.maps.places.Autocomplete(cityInput);
    // console.log(autocomplete);
    // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=input&types=geocode&key=API_KEY

    /* ---AUTOCOMPLETE END--- */

    /* ---WEATHER--- */

    const wbtn = document.querySelector('#getCity');
    const forecastHeader = document.querySelector('#forecast-header');
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
    // let { api, apiKey, lang, units, exclude, cors_hack } = apiSettings;

    const apiSettings = {
      api: 'http://api.openweathermap.org/data/2.5/weather',
      apiKey: 'be69c9c340c7433ef933d94b2c2db766',
      lang: 'ru',
      units: 'metric'
    };
    const {
      api, apiKey, lang, units
    } = apiSettings;

    function getWeather(e) {
      e.preventDefault();
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      // console.log(lat, lng);

      const url = `${api}?lat=${lat}&lon=${lng}&lang=${lang}&units=${units}&appid=${apiKey}`;
      // console.log(url);

      fetch(url)
        .then(res => res.json())
        .then((data) => {
          const templateForecastHeader = `<span>${data.name}</span><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" title="${data.weather[0].description}"><span>${Math.round(data.main.temp)} &deg;С</span>`;
          forecastHeader.innerHTML = templateForecastHeader;
          cityInput.value = '';
          console.log(data);
        })
        .catch(err => console.log(err));

      // let url = `${cors_hack}${api}/${apiKey}/${lat},${lng}?units=${units}&lang=${lang}&exclude=${exclude}`;
      // console.log(url);
      // fetch(url)
      //   .then(res => res.json())
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err));
    }

    /* ---WEATHER END--- */
  });
}
