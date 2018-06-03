$(document).ready(function() {
  const uuid = uuidv4;
  let count = counter();
  class Student {
    constructor(id, name, age, university, website, phone) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.university = university;
      this.website = website;
      this.phone = phone;
    }
  }

  let students = [];

  const tbody = $('#table-area tbody');
  const editIcon = '<i class="far fa-edit"></i>';
  const deleteIcon = '<i class="far fa-trash-alt"></i>';

  $('#form').on('submit', addStudent);
  $('button#cancel').on('click', resetForm);
  $('button#get').on('click', getStudent);
  $('button#save').on('click', saveTable);
  $('button#clear').on('click', clearTable);

  $('#table-area th').on('click', sortTable);

  function load() {
    if (localStorage.students) {
      students = JSON.parse(localStorage.getItem('students'));
      for (let i = 0; i < students.length; i++) {
        addRowTable(students[i]);
      }
    }
  };
  load();

  function addStudent(event) {
    event.preventDefault();
    let student = new Student();

    student.id = uuid();
    student.name = $('#form #nameInput').val();
    student.age = $('#form #ageInput').val();
    student.university = $('#form #universityInput').val();
    student.website = $('#form #websiteInput').val();
    student.phone = $('#form #phoneInput').val();

    students.push(student);
    addRowTable(student);

    localStorage.setItem('students', JSON.stringify(students));

    resetForm();
  }

  function addRowTable({ id, name, age, university, website, phone }) {
    let rowTemplate = `
    <tr id="${id}">
      <td>${count()}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td><a href="${website}">${university}</a></td>
      <td>${phone}</td>
      <td>${editIcon}</td>
      <td>${deleteIcon}</td>
    </tr>`;

    tbody.prepend(rowTemplate);
  }

  function resetForm() {
    $('#form').trigger('reset');
  }

  function getStudent() {}

  function saveTable() {}

  function clearTable() {
    localStorage.clear();
    tbody.empty();
  }

  function editStudent() {}

  function deleteStudent() {}

  function counter(){
    let count = 1;
    return function () {
      return count++;
    }
  }

  function sortTable() {
    let table = $(this)
      .parents('table')
      .eq(0);
    if ($(this).index() >= 5) {
      return 0;
    }
    let rows = table
      .find('tr:gt(0)')
      .toArray()
      .sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) {
      rows = rows.reverse();
    }
    for (let i = 0; i < rows.length; i++) {
      table.append(rows[i]);
    }
    function comparer(index) {
      return function(a, b) {
        let valueA = getCellValue(a, index);
        let valueB = getCellValue(b, index);
        return $.isNumeric(valueA) && $.isNumeric(valueB)
          ? valueA - valueB
          : valueA.localeCompare(valueB);
      };
    }
    function getCellValue(row, index) {
      return $(row)
        .children('td')
        .eq(index)
        .text();
    }
  }
});
