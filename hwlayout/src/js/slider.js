function Slider(insertContent) {
  const sliderLink = document.querySelector('#slider-link');

  const sliderHead1 = '<h2>Slider</h2>';
  const sliderHead2 = '<h2>Slider with buttons</h2>';
  const sliderMain = `
        <div class="carousel-item active">
          <img class="d-block w-100" src="./img/pexels-photo-01.jpeg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="w-100" src="./img/pexels-photo-02.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="w-100" src="./img/pexels-photo-03.jpeg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="w-100" src="./img/pexels-photo-04.jpeg" alt="Fourth slide">
        </div>
        <div class="carousel-item">
          <img class="w-100" src="./img/pexels-photo-05.jpeg" alt="Fifth slide">
        </div>
      `;
  const sliderButtons = `<a class="carousel-control-prev" id="btnPrev">
        <span class="carousel-control-prev-icon"></span></a>
      <a class="carousel-control-next" id="btnNext">
        <span class="carousel-control-next-icon"></span></a>`;

  const templateSlider = `${sliderHead1}<div id="slider1" class="slideshow-container">${sliderMain}</div>${sliderHead2}<div id="slider2" class="slideshow-container">${sliderMain}${sliderButtons}</div>`;

  sliderLink.addEventListener('click', slider);

  function slider(e) {
    e.preventDefault();
    insertContent(templateSlider);
    playSlider();
  }

  function playSlider() {
    class Sliders {
      constructor(sld) {
        this.sld = sld;
        this.autoplay = false;
        this.slides = sld.querySelectorAll('.carousel-item');
        this.currentSlide = 0;
      }

      playShow() {
        console.log('autotest');
        this.autoplay = true;
        const idInterval = setInterval(() => this.nextSlide(), 4000);
      }

      nextSlide() {
        this.slide(this.currentSlide + 1);
      }

      prevSlide() {
        this.slide(this.currentSlide - 1);
      }

      slide(n) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.slides.length + n) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
      }
    }

    const slider1 = new Sliders(document.querySelector('#slider1'));
    const slider2 = new Sliders(document.querySelector('#slider2'));
    // console.log(slider1);
    // console.log(slider2);

    // console.log(slider1.playShow);
    slider1.playShow();

    const btnNext = document.querySelector('#btnNext');
    const btnPrev = document.querySelector('#btnPrev');
    // console.log(btnNext);
    // console.log(btnPrev);

    btnNext.addEventListener('click', () => {
      console.log('test');
      slider2.nextSlide();
    });
    btnPrev.addEventListener('click', () => {
      console.log('test');
      slider2.prevSlide();
    });
  }
}

export default Slider;
