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
  // console.log(document.querySelector('table'));

  showCellNumber();
  
  function showCellNumber() {
    let cells = tableArea.getElementsByTagName('td');
    
    for(let i = 0; i < cells.length; i++){
      // Cell Object
      let cell = cells[i];
      // Track with onclick
      cell.onclick = function(){
        alert(`Index of cell is: ${this.cellIndex + 1}:${this.parentNode.rowIndex + 1}`);
      };
    }
  }
}


