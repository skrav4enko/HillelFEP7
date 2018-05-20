document.addEventListener('DOMContentLoaded', () => {

  const mainSection = document.querySelector('#main');

  const tableLink = document.querySelector('#table-link');
  tableLink.addEventListener('click', (e) => {
    e.preventDefault();
    createTable();
    return false;
  });

  function createTable() {

    while (mainSection.firstChild) {
      mainSection.removeChild(mainSection.firstChild); // удалить при обнаружении
    }

    let templateTable = `<h2>Create Table</h2>
    <form class="row">
    <div class="form-group col">
      <label for="row-input">Number of
        <strong>rows</strong> you want</label>
      <input id='row-input' type="number" class="form-control" value="1" min="0">
    </div>
    <div class="form-group col">
      <label for="column-input">Number of
        <strong>columns</strong> you want</label>
      <input id='column-input' type="number" class="form-control" value="1" min="0">
    </div>
    </form>
    <button type="submit" class="btn btn-primary mb-3">Draw Table</button>
    <div id="table-area"></div>`;

    mainSection.innerHTML = templateTable;

    let inputRowNumber = document.querySelector('#row-input');
    let inputColumnNumber = document.querySelector('#column-input');
    let btn = document.querySelector('button');

    btn.addEventListener('click', createTable);

    function createTable() {
      // console.log(`Row: ${inputRowNumber.value} and Column: ${inputColumnNumber.value}`);
      let tableArea = document.querySelector('#table-area');

      // Проверка на существующую таблицу
      while (tableArea.firstChild) {
        tableArea.removeChild(tableArea.firstChild); // удалить при обнаружении
      }

      let table = document.createElement('table');
      let cellNumber = 1;
      for (let i = 0; i < inputRowNumber.value; i++) {
        let row = table.insertRow();
        for (let j = 0; j < inputColumnNumber.value; j++) {
          let cell = row.insertCell();
          cell.appendChild(document.createTextNode(`Cell ${cellNumber++}`));
        }
      }
      tableArea.appendChild(table).classList.add('table', 'table-striped', 'table-bordered');
      inputRowNumber.value = 1;
      inputColumnNumber.value = 1;
      // console.log(document.querySelector('table'));

      showCellNumber();

      function showCellNumber() {
        let cells = tableArea.getElementsByTagName('td');

        for (let i = 0; i < cells.length; i++) {
          // Cell Object
          let cell = cells[i];
          // Track with onclick
          cell.onclick = function () {
            alert(`Index of cell is: ${this.cellIndex + 1}:${this.parentNode.rowIndex + 1}`);
          };
        }
      }
    }
  }
});