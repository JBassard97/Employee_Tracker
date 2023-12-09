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
  AddEmployee: [
    {
      type: "input",
      name: "empFirstName",
      message: "What is this employee's first name?",
    },
    {
      type: "input",
      name: "empLastName",
      message: "What is this employee's last name?",
    },
    {
      type: "input",
      name: "empRole",
      message: "What is this employee's role?",
    },
    {
      type: "input",
      name: "managersID",
      message: "What is the EmployeeID of this employee's manager?",
    },
  ],
  UpdateEmployeeRole: [
    {
      type: "input",
      name: "lastName",
      message: "What is last name of the employee you'd like to promote/demote?",
    },
    {
      type: "input",
      name: "roleTitle",
      message: "What is the title of their new role?",
    },
  ],
};

module.exports = Ask;
