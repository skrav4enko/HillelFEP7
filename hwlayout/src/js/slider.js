function Slider(insertContent) {
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
}

export default Slider;
