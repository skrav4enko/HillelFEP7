document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');
  
  const progressLink = document.querySelector('#progress-link');
  const progress2Link = document.querySelector('#progress2-link');

  let progressTemplate = `<h2>Progress on Promises</h2>
  <div class="cssProgress">
    <div class="progress1">
      <div class="cssProgress-bar""></div>
    </div>
  </div>
  <div id="articles" class="content-articles">
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
    <div class="content-article">
      <h2 class="article-heading">Lorem</h2>
      <div class="article-info">
      <img class="article-image" src="./img/js_logo.png" alt="" />
      <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec sit amet mi pretium, efficitur nibh vitae, porta neque. Suspendisse velit odio,
          laoreet elementum placerat sed, rutrum in nulla. Nulla finibus ultricies nibh id egestas.
          Ut aliquet mollis dapibus. Nullam justo metus, eleifend semper rhoncus vitae, dignissim at tellus.</p>
      </div>
    </div>
  </div>
  `;

  progressLink.addEventListener('click', (e) => {
    e.preventDefault();
    setContent(progressTemplate);
    progressClear();
    return false;
  });
  progress2Link.addEventListener('click', (e) => {
    e.preventDefault();
    setContent(progressTemplate);
    progress2Clear();
    return false;
  });

  function removeContent () {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }
  }

  function setContent (templateTable) {
    removeContent();
    mainSection.innerHTML = templateTable;
  }

  function progressClear() {
    
  }

  function progress2Clear() {
    
  }

});
