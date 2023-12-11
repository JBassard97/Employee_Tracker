// Takes in query string, array of parameters, and just does it.
async function queryWithparams(sqlQuery, paramArray) {
  const mysql = require("mysql2");
  const dbConfig = require("./dbConfig");
  const connection = mysql.createConnection(dbConfig);

  try {
    await connection.promise().execute(sqlQuery, paramArray);
  } catch (error) {
    console.error("Error executing query", error);
  } finally {
    connection.end();
  }
}

module.exports = queryWithparams;