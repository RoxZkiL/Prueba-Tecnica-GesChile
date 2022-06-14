const { Router } = require("express");
const bd_books = require("../Database/libros.json");
const router = Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let bookDetail = bd_books.find((el) => el.id === Number(id));
  if (bookDetail) {
    res.status(200).send(bookDetail);
  } else {
    res.status(400).send("no existe el libro buscado");
  }
});

module.exports = router;
