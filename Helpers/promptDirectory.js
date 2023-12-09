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
  AddRole: [
    {
      type: "input",
      name: "roleName",
      message: "What is the name of this new Role?",
    },
    {
      type: "input",
      name: "roleSalary",
      message: "What is this role's salary?",
    },
    {
      type: "input",
      name: "roleDepartment",
      message: "What department does this role belong to?",
    },
  ],
};

module.exports = Ask;
