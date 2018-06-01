$(document).ready(function() {
  class Student {
    constructor(name, lastName, age, university, website) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.university = university;
      this.website = website;
    }
  }

  let students = [];

  let tbody = $('#table-area tbody');
  let editIcon = '<i class="far fa-edit"></i>';
  let deleteIcon = '<i class="far fa-trash-alt"></i>';

  $('#form button#add').click(addStudent);
  $('#form button#cancel').click(resetForm);
  $('#form button#get').click(getStudent);
  $('#form button#save').click(saveTable);
  $('#form button#clear').click(clearTable);

  $('#table-area th').click(sortTable);

  function load() {
    if (localStorage.students) {
      students = JSON.parse(localStorage.getItem('students'));
      for (let i = 0; i < students.length; i++) {
        addRowTable(students[i]);
      }
    }
  }
  load();

  function addStudent() {
    let student = new Student();

    student.name = $('#form #nameInput').val();
    student.lastName = $('#form #lastNameInput').val();
    student.age = $('#form #ageInput').val();
    student.university = $('#form #universityInput').val();
    student.website = $('#form #websiteInput').val();

    students.push(student);
    addRowTable(student);

    localStorage.setItem('students', JSON.stringify(students));

    resetForm();
  }

  function addRowTable({ name, lastName, age, university, website }) {
    let rowTemplate = `
    <tr>
      <td>id</td>
      <td>${name}</td>
      <td>${lastName}</td>
      <td>${age}</td>
      <td><a href="${website}">${university}</a></td>
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

  function sortTable() {
    let table = $(this)
      .parents('table')
      .eq(0);
    if ($(this).index() == 5) {
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
