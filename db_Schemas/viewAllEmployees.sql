-- SELECT
--   Employee.id AS EmployeeID,
--   Employee.first_name AS FirstName,
--   Employee.last_name AS LastName,
--   Roles.title AS RoleTitle,
--   Roles.salary AS RoleSalary,
--   Department.name AS DepartmentName
-- FROM
--   Employee
-- JOIN
--   Roles ON Employee.role_id = Roles.id
-- JOIN
--   Department ON Roles.department_id = Department.id;
SELECT
  Employee.id AS EmployeeID,
  Employee.first_name AS FirstName,
  Employee.last_name AS LastName,
  Roles.title AS RoleTitle,
  Roles.salary AS RoleSalary,
  Department.name AS DepartmentName,
  Manager.first_name AS ManagerFirstName,
  Manager.last_name AS ManagerLastName
FROM
  Employee
JOIN
  Roles ON Employee.role_id = Roles.id
JOIN
  Department ON Roles.department_id = Department.id
LEFT JOIN
  Employee AS Manager ON Employee.manager_id = Manager.id;
