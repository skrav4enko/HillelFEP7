
let persons = [25, 25, 50, 100];
let ticketPrice = 25;

tickets(persons);

function tickets(persons) {
  let cashbox = 0;
  let result;

  for (const banknote of persons) {

    if (ticketPrice == banknote) {
      cashbox += banknote;
      result = "YES";
    } else if (cashbox >= (banknote - ticketPrice)) {
      cashbox -= (banknote - ticketPrice)
      cashbox += banknote;
      result = "YES";
    } else {
      result = "NO"; break;
    }
  }
  return console.log(result)
}
