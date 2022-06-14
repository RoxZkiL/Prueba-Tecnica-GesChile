const express = require("express");
const routes = require("./Routes/index");
const cors = require("cors");

const server = express();

server.use(cors());

server.use("/", routes);

server.listen(3000, () => {
  console.log("server listening on port", 3000);
});

module.exports = server;
