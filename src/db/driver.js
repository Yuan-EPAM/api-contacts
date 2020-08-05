const mysql = require("mysql");
const pool = require("./init");

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      }

      conn.query(query, (error, results) => {
        conn.release();
        if (error) {
          reject(error);
        }

        resolve(results);
      });
    });
  });
};

const getItemByNum = (num) => {
  let query = `SELECT ?? FROM Contact LIMIT ${num}`;
  const columns = ["UserID", "Title", "Name", "BirthDate", "IsFavorite"];
  query = mysql.format(query, [columns]);

  return executeQuery(query);
};

module.exports = {
  getItemByNum,
};
