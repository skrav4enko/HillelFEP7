let startPeriod = 2000;
let endPeriod = 2010;

// База студентов с 2000 по 2015 год
let students = [
  { name: "Joscelin", startYear: 2003, endYear: 2008}, 
  { name: "Sonnnie", startYear: 2004, endYear: 2009}, 
  { name: "Reine", startYear: 2006, endYear: 2011}, 
  { name: "Dame", startYear: 2002, endYear: 2007}, 
  { name: "Angie", startYear: 2010, endYear: 2015}, 
  { name: "Dirk", startYear: 2010, endYear: 2015}, 
  { name: "Phaidra", startYear: 2007, endYear: 2012}, 
  { name: "Nance", startYear: 2006, endYear: 2011}, 
  { name: "Courtney", startYear: 2002, endYear: 2007}, 
  { name: "Lane", startYear: 2006, endYear: 2011},
  { name: "Gav", startYear: 2007, endYear: 2012},
  { name: "Ingamar", startYear: 2011, endYear: 2016},
  { name: "Titus", startYear: 2005, endYear: 2010},
  { name: "Prent", startYear: 1998, endYear: 2003},
  { name: "Elspeth", startYear: 1999, endYear: 2004},
  { name: "Carrissa", startYear: 1998, endYear: 2003},
  { name: "Ferd", startYear: 2000, endYear: 2005},
  { name: "Orazio", startYear: 1993, endYear: 1998},
  { name: "Kerrin", startYear: 1989, endYear: 1994},
  { name: "Anderea", startYear: 2005, endYear: 2010},
  { name: "Alonso", startYear: 2004, endYear: 2009},
  { name: "Derward", startYear: 2000, endYear: 2005},
  { name: "Sherwood", startYear: 1964, endYear: 1969},
  { name: "Bartolemo", startYear: 2010, endYear: 2015},
  { name: "Rosy", startYear: 1992, endYear: 1997}
]

// Первый пункт задачи
showStudentsByPeriod.call(students);

// Второй пункт задачи
countStudentsByPeriod.call(students);


function showStudentsByPeriod() {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    
    if (this[i].startYear >= startPeriod && this[i].endYear <= endPeriod) {
      result.push(this[i].name);
    }
  }
  
  return console.log(`In period from ${startPeriod} till ${endPeriod} such sdutent were attended university: ${result}`)
}


function countStudentsByPeriod() {
  let period = endPeriod - startPeriod;
  let counter;
  let result = [];

  for (let i = 0; i <= period; i++) {
    let year = startPeriod + i;
    counter = 0;

    for (let i = 0; i < students.length; i++) {

      if ( year >= this[i].startYear && year <= this[i].endYear) {
      counter++;
      }
    }
    result.push({year, counter});
  }

  Array.prototype.hasMax = function (counter) {
    return this.reduce(function(prevCount, currCount) { 
      return prevCount[counter] > currCount[counter] ? prevCount : currCount; 
    });
  }

  let resultMaxCount = result.hasMax('counter');

  console.log(resultMaxCount);
  return console.log(`The maximum student were ${resultMaxCount.counter} in ${resultMaxCount.year}`)
}