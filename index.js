const { mysql, inquirer, colors } = require("./Helpers/imports");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the ${colors.MagentaText("employee_db")} database.`)
);


