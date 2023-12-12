// Function to execute a query and display results as a table
// This is primarily used to VIEW tables
function runQueryShowTable(sqlQuery, callback) {
  const mysql = require("mysql2");
  const dbConfig = require("./dbConfig");
  const connection = mysql.createConnection(dbConfig);
  const colors = require("jbassard97nodecolors");

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
      console.log(colors.BrightRedText("No results found."));
    }

    // Close the connection
    connection.end();

    if (callback && typeof callback === "function") {
      callback();
    }
  });
}

module.exports = runQueryShowTable;
