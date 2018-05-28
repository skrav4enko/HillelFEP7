function GetForecast() {
  /* ---AUTOCOMPLETE--- */

  const cityInput = document.querySelector('#searchCity');
  const autocomplete = new google.maps.places.Autocomplete(cityInput);
  // console.log(autocomplete);
  // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=input&types=geocode&key=API_KEY

  /* ---WEATHER--- */

  const wbtn = document.querySelector('#getCity');
  const forecastHeader = document.querySelector('#forecast-header');
  wbtn.addEventListener('click', fetchWeatherData);

  google.maps.event.addListener(autocomplete, 'place_changed', () => {});

  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const appId = 'be69c9c340c7433ef933d94b2c2db766';
  const query = `units=metric&lang=ru&appid=${appId}`;

  function weatherIcon(time, weatherCode) {
    const timeOfDay = (time > 7 && time < 18) ? 'day' : 'night';
    const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`;
    const icon = `<i class="${className}"></i>`;

    return icon;
  }

  function fetchWeatherData(event) {
    event.preventDefault();
    const placeName = autocomplete.getPlace().name;
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // console.log(autocomplete.getPlace());

    const url = `${baseUrl}?lat=${lat}&lon=${lng}&${query}`;
    // console.log(url);

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const date = new Date();
        const time = date.getHours();

        forecastHeader.innerHTML = `<span>${placeName} </span><span title="${data.weather[0].description}"> ${weatherIcon(time, data.weather[0].id)} </span><span> ${Math.round(data.main.temp)}&deg; С</span>`;
        cityInput.value = '';
        // console.log(data);
      })
      .catch(error => console.error(error));
  }
}

export default GetForecast;
