document.addEventListener('DOMContentLoaded', () => {
    
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction();};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';
    }
  }



  let toggleMenu = document.querySelector('#toggleMenu');
  let toggleMenuStatus = 1;

  toggleMenu.addEventListener('click', () => {
    if (toggleMenuStatus == 1) {
      document.querySelector('.nav_header').classList.add('showMenu');
      toggleMenuStatus = 0;
    } else {
      document.querySelector('.nav_header').classList.remove('showMenu');
      toggleMenuStatus = 1;
    }
  });
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}