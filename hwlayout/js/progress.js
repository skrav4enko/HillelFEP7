document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');
  
  const sliderLink = document.querySelector('#progress-link');
  sliderLink.addEventListener('click', (e) => {
    e.preventDefault();
    setSliderContent();
    return false;
  });

  function setSliderContent() {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }
  
    let templateTable = `<h2>Progress</h2>
    `;
  
    mainSection.innerHTML = templateTable;
  }
});
