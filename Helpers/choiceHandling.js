const viewAllEmployees = require("./caseFunctions/ViewAllEmployees");
const viewAllRoles = require("./caseFunctions/ViewAllRoles");
const viewAllDeps = require("./caseFunctions/ViewAllDeps");
const addEmployee = require("./caseFunctions/AddEmployee");
const updateEmpRole = require("./caseFunctions/UpdateEmpRole");
const addRole = require("./caseFunctions/AddRole");
const addDep = require("./caseFunctions/AddDep");
const deleteDep = require("./caseFunctions/DeleteDep");
const deleteEmp = require("./caseFunctions/DeleteEmployee");
const deleteRole = require("./caseFunctions/DeleteRole");
const updateEmployeeManager = require("./caseFunctions/UpdateEmpManager");
const viewEmployeesByManager = require("./caseFunctions/ViewEmpByMgr");
const viewEmployeesByDepartment = require("./caseFunctions/ViewEmpByDep");
const viewLaborBudget = require("./caseFunctions/ViewLaborBudget");

// Handles any answer from Ask.choices
function handleChoices(choice) {
  switch (choice) {
    case "View All Employees":
      viewAllEmployees();
      break;
    case "View All Roles":
      viewAllRoles();
      break;
    case "View All Departments":
      viewAllDeps();
      break;
    case "Add Employee":
      addEmployee();
      break;
    case "Update Employee Role":
      updateEmpRole();
      break;
    case "Add Role":
      addRole();
      break;
    case "Add Department":
      addDep();
      break;
    case "Delete Employee":
      deleteEmp();
      break;
    case "Delete Department":
      deleteDep();
      break;
    case "Delete Role":
      deleteRole();
      break;
    case "Update Employee Managers":
      updateEmployeeManager();
      break;
    case "View Employees By Manager":
      viewEmployeesByManager();
      break;
    case "View Employees By Department":
      viewEmployeesByDepartment();
      break;
    case "View Labor Budget":
      viewLaborBudget();
      break;
    case "Quit":
      break;
  }
}

module.exports = handleChoices;
