import TableGen from './table';
import { Clock, Timer } from './time';
import WinSize from './winsize';
import Slider from './slider';
import Progress from './progress';
import GetForecast from './weather';
import StudentsTable from './students';

function Main() {
  document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('#content');

    function clearContent() {
      while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild);
      }
    }

    function insertContent(template) {
      clearContent();
      mainSection.innerHTML = template;
    }

    /* ---MAIN PAGE--- */

    const mainLink = document.querySelector('#main-link');
    mainLink.addEventListener('click', mainPage);

    const mainTemplate = `<h2>Main Content</h2>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium repellendus fuga totam recusandae deserunt nobis! Ipsam, ipsum aliquam quidem, quaerat saepe odit eveniet atque velit quas at sint tenetur maiores aperiam laboriosam ab alias et nulla perspiciatis culpa enim minus eaque cum libero. Enim facilis eveniet reprehenderit fuga ipsam sint mollitia iusto repudiandae rerum?</p>`;

    insertContent(mainTemplate);

    function mainPage(e) {
      e.preventDefault();
      insertContent(mainTemplate);
      return false;
    }

    /* ---TABLE GENERATOR--- */
    TableGen(insertContent);

    /* ---CLOCK--- */
    Clock();

    /* ---WINDOW SIZE--- */
    WinSize();

    /* ---TIMER--- */
    Timer();

    /* ---SLIDER 1 & 2--- */
    Slider(insertContent);

    /* ---PROMISES 1 & 2--- */
    Progress(insertContent);

    // StudentsTable(insertContent);

    /* ---WEATHER--- */
    GetForecast();
  });
}

export default Main;
