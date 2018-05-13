document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('#main');
  setMainContent();

  const mainLink = document.querySelector('#main-link');
  mainLink.addEventListener('click', (e) => {
    e.preventDefault();
    setMainContent();
    return false;
  });

  function setMainContent() {
    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }

    let templateTable = `<h2>Main Content</h2>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium repellendus fuga totam recusandae deserunt nobis! Ipsam, ipsum aliquam quidem, quaerat saepe odit eveniet atque velit quas at sint tenetur maiores aperiam laboriosam ab alias et nulla perspiciatis culpa enim minus eaque cum libero. Enim facilis eveniet reprehenderit fuga ipsam sint mollitia iusto repudiandae rerum? Voluptas illo eius quidem incidunt tempore, nulla assumenda maxime et est ipsa quia minus recusandae dolores natus itaque? Numquam quae aliquid, odit, ut laudantium quibusdam expedita odio consectetur dolores aut vitae recusandae dignissimos. Et earum aspernatur sunt eveniet in consequuntur voluptas laudantium vitae. Odio, quibusdam unde. </p>`;

    mainSection.innerHTML = templateTable;
  }
});