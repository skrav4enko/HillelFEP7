

let maths = {
  number: prompt('Please enter some number', 50),

  sum: function () {
    console.log(`${this.number} + 1`);
    ++this.number;
    return this;
  },
  minus:  function () {
    console.log(`${this.number} - 1`);
    --this.number;
    return this;
  },
  multiplay: function () {
    console.log(`${this.number} * ${this.number} `);
    this.number *= this.number;
    return this;
  },
  showResult: function () {
    console.log(`Результат ${this.number}`);
    return this;
  },
}

maths.sum().sum().minus().multiplay().showResult();
