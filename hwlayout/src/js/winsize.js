function WinSize() {
  const windowSizeArea = document.querySelector('#window-size');
  showWindowSize();

  function showWindowSize() {
    windowSizeArea.innerHTML = `${window.innerWidth} x ${window.innerHeight} px`;
  }

  window.addEventListener('resize', resize);

  function resize() {
    clearTimeout(window.resizeEnd);
    window.resizeEnd = setTimeout(showWindowSize, 2000);
  }
}

export default WinSize;
