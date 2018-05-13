document.addEventListener('DOMContentLoaded', () => {

  let windowSizeArea = document.querySelector('#window-size');
  showWindowSize();
  
  window.addEventListener('resize', resize);
  
  function resize() {
    clearTimeout(window.resizeEnd);
    window.resizeEnd = setTimeout(showWindowSize, 2000); 
  }
  
  function showWindowSize() {
    windowSizeArea.innerHTML = `${window.innerWidth} x ${window.innerHeight} px`;
  }
});