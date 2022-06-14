const { Router } = require("express");
const bd_users = require("../Database/usuarios.json");
const router = Router();

router.get("/:search", (req, res) => {
  const email = req.params.search;
  const user = bd_users.find((e) => e.email === email);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(400).send("Usuario no encontrado");
  }
});

module.exports = router;

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = bd_users.find((e) => e.id === Number(id));
//   if (user) {
//     res.status(200).send(user);
//   } else {
//     res.status(400).send("Usuario no encontrado");
//   }
// });
