function TableGen(insertContent) {
  /* ---TABLE GENERATOR--- */

  const tableLink = document.querySelector('#table-link');
  tableLink.addEventListener('click', tableGenerator);

  const templateTable = `<h2>Create Table</h2>
    <form class="row">
    <div class="form-group col">
      <label for="row-input">Number of
        <strong>rows</strong> you want</label>
      <input id='row-input' type="number" class="form-control" min="0">
    </div>
    <div class="form-group col">
      <label for="column-input">Number of
        <strong>columns</strong> you want</label>
      <input id='column-input' type="number" class="form-control" min="0">
    </div>
    </form>
    <button id="btnTable" class="btn btn-primary mb-3">Draw Table</button>
    <div id="table-area"></div>`;

  function tableGenerator(e) {
    e.preventDefault();
    insertContent(templateTable);
    createTable();
    return false;
  }

  function createTable() {
    const inputRowNumber = document.querySelector('#row-input');
    const inputColumnNumber = document.querySelector('#column-input');
    const btn = document.querySelector('#btnTable');

    btn.addEventListener('click', drawTable);

    function drawTable() {
      // console.log(`Row: ${inputRowNumber.value} and Column: ${inputColumnNumber.value}`);
      const tableArea = document.querySelector('#table-area');

      // Проверка на существующую таблицу
      while (tableArea.firstChild) {
        tableArea.removeChild(tableArea.firstChild); // удалить при обнаружении
      }

      const table = document.createElement('table');
      let cellNumber = 1;
      for (let i = 0; i < inputRowNumber.value; i++) {
        const row = table.insertRow();
        for (let j = 0; j < inputColumnNumber.value; j++) {
          const cell = row.insertCell();
          cell.appendChild(document.createTextNode(`Cell ${cellNumber += 1}`));
        }
      }
      tableArea
        .appendChild(table)
        .classList.add('table', 'table-striped', 'table-bordered');
      inputRowNumber.value = '';
      inputColumnNumber.value = '';
      // console.log(document.querySelector('table'));

      showCellNumber();

      function showCellNumber() {
        const cells = tableArea.getElementsByTagName('td');

        for (let i = 0; i < cells.length; i++) {
          // Cell Object
          const cell = cells[i];
          // Track with onclick
          cell.onclick = function () {
            alert(`Index of cell is: ${this.cellIndex + 1}:${this.parentNode
              .rowIndex + 1}`);
          };
        }
      }
    }
  }

  /* ---TABLE GENERATOR END--- */
}

export default TableGen;
