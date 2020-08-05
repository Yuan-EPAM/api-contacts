const mysql = require("mysql");
const config = require("./config");

const getPoolConfig = (config) => ({
  connectionLimit: 5,
  ...config,
});

const pool = mysql.createPool(getPoolConfig(config));

module.exports = pool;
