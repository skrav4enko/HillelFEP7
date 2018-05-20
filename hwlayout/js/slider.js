document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');

  const sliderLink = document.querySelector('#slider-link');
  sliderLink.addEventListener('click', (e) => {
    e.preventDefault();
    setSliderContent();
    return false;
  });

  function setSliderContent() {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }

    let templateTable = `<h2>Infinite Slideshow</h2>
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

    mainSection.innerHTML = templateTable;
    let slides = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);
    // console.log(slides);

    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  }
});

