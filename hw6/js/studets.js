let startPeriod = 2000;
let endPeriod = 2010;

let students = [{
  id: 1,
  name: "Joscelin",
  startYear: 2003,
  endYear: 2008
}, {
  id: 2,
  name: "Sonnnie",
  startYear: 2004,
  endYear: 2009
}, {
  id: 3,
  name: "Reine",
  startYear: 2006,
  endYear: 2011
}, {
  id: 4,
  name: "Dame",
  startYear: 2002,
  endYear: 2007
}, {
  id: 5,
  name: "Angie",
  startYear: 2010,
  endYear: 2015
}, {
  id: 6,
  name: "Dirk",
  startYear: 2010,
  endYear: 2015
}, {
  id: 7,
  name: "Phaidra",
  startYear: 2007,
  endYear: 2012
}, {
  id: 8,
  name: "Nance",
  startYear: 2006,
  endYear: 2011
}, {
  id: 9,
  name: "Courtney",
  startYear: 2002,
  endYear: 2007
}, {
  id: 10,
  name: "Lane",
  startYear: 2006,
  endYear: 2011
}]

showStudentsByPeriod.call(students);

function showStudentsByPeriod() {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    // this = students[i];
    
    if (this[i].startYear >= startPeriod && this[i].endYear <= endPeriod) {
      result.push(this[i].name);
    }
  }
  
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}


// countStudentsByPeriod.call(students);

// function countStudentsByPeriod() {
  
// }
