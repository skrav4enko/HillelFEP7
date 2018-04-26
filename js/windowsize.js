let windowSizeArea = document.querySelector('#window-size');

resize();
window.onresize = resize;

// if () {
  
// }

function resize() {
  let width=window.innerWidth; 
  let height=window.innerHeight;

  windowSizeArea.innerHTML = `${width}px x ${height}px`;
  // console.log(`width ${width}, height ${height}`);
}