const mysql = require("mysql");
const pool = require("./init");

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connErr, conn) => {
      if (connErr) {
        reject(connErr);
      }

      conn.query(query, (queryErr, results) => {
        conn.release();
        if (queryErr) {
          reject(queryErr);
        }

        resolve(results);
      });
    });
  });
};

const getItem = (queryTemplate, payload) => {
  let query = mysql.format(queryTemplate, payload);
  return executeQuery(query);
};

module.exports = {
  getItem,
};
