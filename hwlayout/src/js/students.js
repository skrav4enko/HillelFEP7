function StudentsTable(insertContent) {
  const studentsLink = document.querySelector('#students-link');
  studentsLink.addEventListener('click', renderStudets);

  const templateForm = `
  <h1>Students</h1>

<section id="form-area" class="mb-3">
  <div class="row">
    <div class="col-md-10 mb-3">
      <form name="formStudents" id="formStudents">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="nameInput">First & Last name</label>
            <input type="text" name="nameInput" id="nameInput" class="form-control" placeholder="John Wayne" required>
          </div>
          <div class="form-group col-md-2">
            <label for="ageInput">Age</label>
            <input type="number" name="ageInput" id="ageInput" class="form-control" min="0" placeholder="23">
          </div>
          <div class="form-group col-md-4">
            <label for="phoneInput">Phone #</label>
            <input type="tel" name="phoneInput" id="phoneInput" class="form-control" placeholder="+380 (50) 111 1111">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="universityInput">University</label>
            <input type="text" name="universityInput" id="universityInput" class="form-control" placeholder="Harvard University">
          </div>
          <div class="form-group col-md-6">
            <label for="websiteInput">Website</label>
            <input type="url" name="websiteInput" id="websiteInput" class="form-control" placeholder="https://harvard.edu/">
          </div>
        </div>
        <button id="add" type="submit" class="btn btn-primary">Add</button>
        <button id="cancel" type="button" class="btn">Cancel</button>
      </form>
    </div>
    <div class="col-md-2">
        <button id="get" type="button" class="btn btn-block">Get</button>
        <button id="save" type="button" class="btn btn-block">Save</button>
        <button id="clear" type="button" class="btn btn-block">Clear</button>
    </div>
  </div>

</section>
  <table id="table-area" class="table table-hover table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>University</th>
        <th>Phone #</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>`;

  function renderStudets(e) {
    e.preventDefault();
    insertContent(templateForm);
    studTable();
    return false;
  }

  function studTable(params) {
    const uuid = uuidv4;
    const count = counter();
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
    }
    load();

    function addStudent(event) {
      event.preventDefault();
      const student = new Student();

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

    function addRowTable({
 id, name, age, university, website, phone 
}) {
      const rowTemplate = `
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

    function counter() {
      let count = 1;
      return function () {
        return count++;
      };
    }

    function sortTable() {
      const table = $(this)
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
        return function (a, b) {
          const valueA = getCellValue(a, index);
          const valueB = getCellValue(b, index);
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
  }
}

export default StudentsTable;
