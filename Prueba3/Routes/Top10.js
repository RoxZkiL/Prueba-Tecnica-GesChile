const { Router } = require("express");
const bd_books = require("../Database/libros.json");
const bd_gifts = require("../Database/regalos.json");
const router = Router();
const { topOcurrenceBooks } = require("./utils/utils");

router.get("/", (req, res) => {
  const output = topOcurrenceBooks(bd_gifts, true);

  const filtro = bd_books
    .filter((element) => {
      const match = output.find((e) => e.bookId === element.id);
      if (!match) return element;
    })
    .slice(0, 10);

  res.send(filtro);
});

router.get("/:order", (req, res) => {
  const order = req.params.order;

  const output = topOcurrenceBooks(bd_gifts, true);

  const filtro = bd_books
    .filter((element) => {
      const match = output.find((e) => e.bookId === element.id);
      if (!match) return element;
    })
    .slice(0, 10);

  //Endpoint ordenado de forma alfabetica de forma ascendente (de la A a la Z)
  //con base en la propiedad title.
  if (order.toLowerCase() === "alphabetical") {
    filtro.sort((name1, name2) => {
      const title1 = name1.title.toLowerCase();
      const title2 = name2.title.toLowerCase();
      if (title1 < title2) return -1;
      if (title1 > title2) return 1;
      return 0;
    });
    res.send(filtro);
    //Endpoint ordenado de forma ascendente (de mayor a menor) con base
    //a la propiedad publish_date.
  } else if (order.toLowerCase() === "publishdate") {
    filtro.sort((date1, date2) => {
      const firstFecha = Number(date1["publish date"].slice(0, 4));
      const secondFecha = Number(date2["publish date"].slice(0, 4));

      if (firstFecha < secondFecha) return 1;
      if (firstFecha > secondFecha) return -1;
      return 0;
    });
    res.send(filtro);
  }
});

module.exports = router;
