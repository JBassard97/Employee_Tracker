const sqlCommands = {
  showAllTables: "SHOW TABLES",
  viewAllDepartments: `
  SELECT
    Department.id AS DepartmentID,
    Department.name AS DepartmentName,
    COUNT(Roles.id) AS RoleCount
FROM
    Department
LEFT JOIN
    Roles ON Department.id = Roles.department_id
GROUP BY
    Department.id, Department.name;`,
  viewAllRoles: `
  SELECT
    Roles.id AS RoleID,
    Roles.title AS RoleTitle,
    Roles.salary AS RoleSalary,
    COUNT(Employee.id) AS EmployeeCount
FROM
    Roles
LEFT JOIN
    Employee ON Roles.id = Employee.role_id
GROUP BY
    Roles.id, Roles.title, Roles.salary;`,
  viewAllEmployees: `
SELECT
  Employee.id AS EmployeeID,
  Employee.first_name AS FirstName,
  Employee.last_name AS LastName,
  Roles.title AS Title,
  Roles.salary AS Salary,
  Department.name AS Department,
  Manager.first_name AS ManagerFirstName,
  Manager.last_name AS ManagerLastName
FROM
  Employee
JOIN
  Roles ON Employee.role_id = Roles.id
JOIN
  Department ON Roles.department_id = Department.id
LEFT JOIN
  Employee AS Manager ON Employee.manager_id = Manager.id;`,
  addDepartment: `
  INSERT INTO Department (name)
  VALUES (?)`,
};

module.exports = sqlCommands;
