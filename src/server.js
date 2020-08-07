const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

// const contactController = require("./controllers/contactController");

const contact = require("./router/contact");

server.use(cors());
server.use(bodyParser.json());

// server.get("/", contactController.getContact);
server.use("/contact", contact);

module.exports = server;
