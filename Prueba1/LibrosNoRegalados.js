const bd_books = require("../Database/libros.json");
const arr = require("../Database/regalos.json");

const output = Object.values(
  arr.reduce((obj, { book }) => {
    if (obj[book] === undefined)
      obj[book] = { bookNumber: book, occurrence: 1 };
    else obj[book].occurrence++;
    return obj;
  }, {})
);

const filtro = bd_books.filter((element) => {
  const match = output.find((e) => e.bookNumber === element.id);
  if (!match) return element;
});

console.log(filtro);
