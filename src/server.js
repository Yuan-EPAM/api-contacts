const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

const contactController = require("./controllers/contactController");

server.use(cors());
server.use(bodyParser.json());

server.get("/", contactController.getContact);

module.exports = server;
