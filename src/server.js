const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

const contactController = require("./controllers/contactController");

server.use(cors());
server.use(bodyParser.json());

server.get("/", async (req, res) => {
  const response = {
    contact: await contactController.getContact(),
  };
  console.log(response);
  res.status(200).send(response);
});

module.exports = server;
