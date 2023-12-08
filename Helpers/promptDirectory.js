const Ask = {
  Choices: [
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        "Update Employee Role",
        "Add Role",
        "Add Department",
        "Quit",
      ],
    },
  ],
  AddDepartment: [
    {
      type: "input",
      name: "choice",
      message: "What is the name of this new Department?",
    },
  ],
};

module.exports = Ask;
