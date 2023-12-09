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
    COUNT(Employee.id) AS EmployeeCount,
    Department.name AS DepartmentName -- Include the department name
FROM
    Roles
LEFT JOIN
    Employee ON Roles.id = Employee.role_id
LEFT JOIN
    Department ON Roles.department_id = Department.id
GROUP BY
    Roles.id, Roles.title, Roles.salary, Department.name;
`,
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
  addRole: `
  INSERT INTO Roles (title, salary, department_id) 
VALUES (
    ?,
    ?,
    (SELECT id FROM Department WHERE name = ?)
);`,
  addEmployee: `
  INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES (
    ?,
    ?,
    (SELECT id FROM Roles WHERE title = ?),
    ?
);`,
  updateEmployeeRole: `
  UPDATE Employee
SET role_id = (SELECT id FROM Roles WHERE title = ?)
WHERE last_name = ?;
`,
};

module.exports = sqlCommands;
