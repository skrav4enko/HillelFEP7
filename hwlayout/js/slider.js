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

    let templateTable = `<h2>Infinite slider</h2>
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
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

      <!-- Next and previous buttons -->
      <a id="prevArrow" class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a id="nextArrow" class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot active" onclick="currentSlide(1)"></span> 
      <span class="dot" onclick="currentSlide(2)"></span> 
      <span class="dot" onclick="currentSlide(3)"></span> 
    </div>`;

    mainSection.innerHTML = templateTable;
  }

  let arrowLeft = document.querySelector('#prevArrow');
  let arrowRight = document.querySelector('#nextArrow');
  
  let slides = document.querySelectorAll('.carousel-item');
  let dots = document.querySelectorAll('dot');
  
  let slideIndex = 1;
  
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
  
    // if (n > slides.length) {
    //   slideIndex = 1;
    // } 
    // if (n < 1) {
    //   slideIndex = slides.length;
    // }
    // for (let i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none'; 
    // }
    // for (let i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    // slides[slideIndex-1].style.display = 'block'; 
    // dots[slideIndex-1].className += ' active';
  }
});

