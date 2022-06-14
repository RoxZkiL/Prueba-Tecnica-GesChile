const arr = require("../Database/regalos.json");

let output = Object.values(
  arr.reduce((obj, { book }) => {
    if (obj[book] === undefined)
      obj[book] = { bookNumber: book, occurrence: 1 };
    else obj[book].occurrence++;
    return obj;
  }, {})
)
  .sort((a, b) => {
    if (a.occurrence > b.occurrence) {
      return -1;
    }
    if (b.occurrence < a.occurrence) {
      return 1;
    }
    return 0;
  })
  .slice(0, 5);

let i = 1;

let result = output.map((e) => {
  return {
    Top: i++,
    NumeroDeLibro: e.bookNumber,
    VecesRegalado: e.occurrence,
  };
});
console.log(result);
