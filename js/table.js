let inputRowNumber = document.querySelector('#row');
let inputColumnNumber = document.querySelector('#column');
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
  console.log(`Row: ${inputRowNumber.value} and Column: ${inputColumnNumber.value}`);
  createTable();
});

function createTable() {
  let tableArea = document.querySelector('#table-area');

  while (tableArea.firstChild) {
    tableArea.removeChild(tableArea.firstChild);
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
  tableArea.appendChild(table);
  console.log(document.querySelector('table'));
}