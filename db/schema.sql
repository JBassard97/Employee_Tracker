DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(9, 2) NOT NULL, -- Anticipating $3,000,000.00 salaries
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES Department(id)
    ON DELETE SET NULL 
);

CREATE TABLE Employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES Roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES Employee(id) 
    ON DELETE SET NULL 
);
