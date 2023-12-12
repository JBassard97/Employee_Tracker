// Directory of all questions used in program

const Ask = {
  Choices: [
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Employees",
        "View All Roles",
        "View Employees By Manager",
        "View Employees By Department",
        "Add Department",
        "Add Employee",
        "Add Role",
        "Update Employee Role",
        "Update Employee Managers",
        "Delete Department",
        "Delete Employee",
        "Delete Role",
        "View Labor Budget",
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
      message:
        "What is last name of the employee you'd like to promote/demote?",
    },
    {
      type: "input",
      name: "roleTitle",
      message: "What is the title of their new role?",
    },
  ],
  DeleteEmployee: [
    {
      type: "input",
      name: "empLastName",
      message: "What is last name of the employee you'd like to delete?",
    },
    {
      type: "input",
      name: "empID",
      message: "What is this employee's ID?",
    },
  ],
  DeleteDepartment: [
    {
      type: "input",
      name: "depName",
      message: "What is the name of the department you'd like to delete?",
    },
  ],
  DeleteRole: [
    {
      type: "input",
      name: "roleName",
      message: "What is the name of the role you'd like to delete?",
    },
  ],
  UpdateEmployeeManager: [
    {
      type: "input",
      name: "empLastName",
      message: "What is the last name of the employee we're updating?",
    },
    {
      type: "input",
      name: "empID",
      message: "What is this employee's ID?",
    },
    {
      type: "input",
      name: "newManagerID",
      message: "What is the ID of this employee's new manager?",
    },
  ],
  ViewEmployeesByManager: [
    {
      type: "input",
      name: "mgrLastName",
      message:
        "What is last name of the manager you'd like to view employees for?",
    },
    {
      type: "input",
      name: "empID",
      message: "What is this manager's ID?",
    },
  ],
  ViewEmployeesByDepartment: [
    {
      type: "input",
      name: "depName",
      message:
        "What is the name of the department you'd like to view employees for?",
    },
  ],
};

module.exports = Ask;
