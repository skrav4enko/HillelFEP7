function GetForecast() {
  /* ---AUTOCOMPLETE--- */

  const cityInput = document.querySelector('#searchCity');
  const autocomplete = new google.maps.places.Autocomplete(cityInput);
  autocomplete.addListener('place_changed', () => {});
  // console.log(autocomplete);
  // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=input&types=geocode&key=API_KEY

  /* ---WEATHER--- */

  const wbtn = document.querySelector('#getCity');
  const forecastHeader = document.querySelector('#forecast-header');
  wbtn.addEventListener('click', fetchWeatherData);

  const apiCnf = {
    baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
    appId: 'be69c9c340c7433ef933d94b2c2db766',
    query: 'units=metric&lang=ru'
  };

  let cityInfo = {};
  function load() {
    if (localStorage.cityInfo) {
      cityInfo = JSON.parse(localStorage.getItem('cityInfo'));
      console.log(cityInfo);
      fetchWeatherData(cityInfo);
    } else {
      forecastHeader.innerHTML =
      `Узнать погоду <i class="far fa-hand-point-right"></i>`;
    }
  }
  load();

  // const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  // const appId = 'be69c9c340c7433ef933d94b2c2db766';
  // const query = `units=metric&lang=ru&appid=${appId}`;

  function weatherIcon(time, weatherCode) {
    const timeOfDay = time > 7 && time < 18 ? 'day' : 'night';
    const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`;
    const icon = `<i class="${className}"></i>`;

    return icon;
  }

  function fetchWeatherData(event) {
    cityInfo.placeName = autocomplete.getPlace().name;
    cityInfo.lat = autocomplete.getPlace().geometry.location.lat();
    cityInfo.lng = autocomplete.getPlace().geometry.location.lng();

    localStorage.setItem('cityInfo', JSON.stringify(cityInfo));

    const url = `${apiCnf.baseUrl}?lat=${cityInfo.lat}&lon=${cityInfo.lng}&${
      apiCnf.query
    }&appid=${apiCnf.appId}`;
    event.preventDefault();
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const date = new Date();
        const time = date.getHours();

        forecastHeader.innerHTML = `<span>${
          cityInfo.placeName
        } </span><span title="${data.weather[0].description}"> ${weatherIcon(
          time,
          data.weather[0].id
        )} </span><span> ${Math.round(data.main.temp)}&deg; С</span>`;
        cityInput.value = '';
        // console.log(data);
      })
      .catch(error => console.error(error));
  }
}

export default GetForecast;
