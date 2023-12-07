// Function to execute a query and display results as a table
function runQueryShowTable(sqlQuery, callback) {
  const mysql = require("mysql2");

  const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
  };

  const connection = mysql.createConnection(dbConfig);

  // Perform a SELECT query
  connection.query(sqlQuery, function (error, results, fields) {
    if (error) {
      console.error("Error executing query:", error);
      connection.end(); // Close the connection in case of an error
      return;
    }

    // If there are any results
    if (results.length > 0) {
      // Display results as a table
      console.table(results);
    } else {
      console.log("No results found.");
    }

    // Close the connection
    connection.end();

    if (callback && typeof callback === "function") {
      callback();
    }
  });
}

module.exports = runQueryShowTable;
