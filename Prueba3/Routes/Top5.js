const { Router } = require("express");
const bd_books = require("../Database/libros.json");
const bd_gifts = require("../Database/regalos.json");
const router = Router();
const { topOcurrenceBooks } = require("./utils/utils");

router.get("/", (req, res) => {
  const output = topOcurrenceBooks(bd_gifts, true).slice(0, 5);

  const complete = output.map((top) => {
    for (let i = 0; i < bd_books.length; i++) {
      if (bd_books[i].id === top.bookId) {
        return {
          ...top,
          title: bd_books[i].title,
          isn: bd_books[i].iesn,
          Editorial: bd_books[i].Editorial,
          author: bd_books[i].author,
          publish_date: bd_books[i]["publish date"],
        };
      }
    }
  });

  res.send(complete);
});

module.exports = router;
