function Progress(insertContent) {
  /* ---PROMISES 1 & 2--- */

  const progressLink = document.querySelector('#progress-link');
  const progress1Link = document.querySelector('#progress1-link');

  const progressHeader = '<h2>Progress on Promises</h2>';
  const progressBar = '<div class="progress"><div class="progress-bar""></div></div>';
  const articleContent = `<div class="card mb-3">
          <img class="card-img" src="./img/js_logo.png">
          <div class="card-body">
          <h3 class="card-title">Lorem</h3>
          <p class="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
              laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
              Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
          </div>
        </div>`;

  const progressTemplate = `${progressHeader}${progressBar}
      ${articleContent}${articleContent}${articleContent}`;

  progressLink.addEventListener('click', progress);
  progress1Link.addEventListener('click', progress1);

  function progress(e) {
    e.preventDefault();
    insertContent(progressTemplate);
    const progressbar = document.querySelector('.progress-bar');
    progressbar.addEventListener('animationend', progressClear);
    return false;
  }

  function progress1(e) {
    e.preventDefault();
    insertContent(progressTemplate);
    const progressbar = document.querySelector('.progress-bar');
    progressbar.addEventListener('animationend', progress1Clear);
    return false;
  }

  function progressClear() {
    console.log('Anim End');
  }

  function progress1Clear() {
    console.log('Anim End 2');
  }
}

export default Progress;
