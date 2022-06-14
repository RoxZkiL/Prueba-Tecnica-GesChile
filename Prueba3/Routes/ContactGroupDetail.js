const router = require("express").Router();
const bd_users = require("../Database/usuarios.json");
const bd_regalos = require("../Database/regalos.json");
const { idGroups, alphabeticalId } = require("./utils/utils");

router.get("/:search", (req, res) => {
  const idUser = req.params.search;
  const user = bd_users.find((e) => e.id === Number(idUser));

  const allGroupsContact = idGroups(bd_regalos);
  const orderAtoZ = alphabeticalId(allGroupsContact, bd_users);

  if (user) {
    for (let i = 0; i < orderAtoZ.length; i++) {
      if (orderAtoZ[i].includes(Number(idUser))) {
        user.group = orderAtoZ[i].slice(0, 5);
        if (orderAtoZ[i].length > 5) {
          user.more = true;
          break;
        }
      } else {
        user.more = false;
      }
    }
  }

  if (user) {
    res.status(200).send(user);
  } else {
    res.send({ msg: "Error usuario con id: " + idUser + " no encontrado" });
  }
});

module.exports = router;
