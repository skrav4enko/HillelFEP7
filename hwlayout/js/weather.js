document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');
  
  const sliderLink = document.querySelector('#weather-link');
  sliderLink.addEventListener('click', (e) => {
    e.preventDefault();
    setWeatherContent();
    return false;
  });

  function setWeatherContent() {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }
  
    let templateTable = `<h2>Weather</h2>
    `;
  
    mainSection.innerHTML = templateTable;
  }
});