const dataBase = require("../Database/regalos.json");

//Libro mas regalado:

let masRegalado = Object.values(
  dataBase.reduce((obj, { book }) => {
    if (obj[book] === undefined)
      obj[book] = { numeroDeLibro: book, vecesRegalado: 1 };
    else obj[book].vecesRegalado++;
    return obj;
  }, {})
)
  .sort((a, b) => {
    if (a.vecesRegalado > b.vecesRegalado) {
      return -1;
    }
    if (b.vecesRegalado < a.vecesRegalado) {
      return 1;
    }
    return 0;
  })
  .slice(0, 1);

console.log(masRegalado);

//Cantidad de veces que se ha regalado cada libro

let contadorRegalados = Object.values(
  dataBase.reduce((obj, { book }) => {
    if (obj[book] === undefined)
      obj[book] = { numeroDeLibro: book, vecesRegalado: 1 };
    else obj[book].vecesRegalado++;
    return obj;
  }, {})
);

console.log(contadorRegalados);

//Libro menos regalado: En mi apreciación no se puede hacer una estadistica precisa
//sobre cual fue el libro menos regalado, ya que, existen varios libros en la base
//de datos que no fueron regalados, estos libros estan en el algoritmo del archivo
//LibrosNoRegalados.js.
