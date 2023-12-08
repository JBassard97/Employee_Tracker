async function queryWithparams(sqlQuery, paramArray) {
  const mysql = require("mysql2");

  const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
  };

  const connection = mysql.createConnection(dbConfig);

  try {
    await connection.promise().execute(sqlQuery, paramArray);
    console.log("Success!");
  } catch (error) {
    console.error("Error executing query", error);
  } finally {
    connection.end();
  }
}

module.exports = queryWithparams;