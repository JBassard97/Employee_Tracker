-- INSERT INTO Department (name) 
--     VALUES ('Upper Management'),
--     ('Middle Management'),
--     ('Front Line')

-- INSERT INTO Roles (title, salary)
--     VALUES ('CEO', 650000),
--     -- ('President', 400000.00, 1),
--     -- ('Area Manager', 200000.00, 1),
--     -- ('District Manager' 150000.00, 1),
--     -- ('Owner', 100000.00, 1),
--     ('General Manager', 60000),
--     -- ('Assistant Manager', 50000.50, 2),
--     -- ('Shift Leader', 40000.50, 2),
--     -- ('Cashier', 25000.00, 3),
--     -- ('Receptionist', 20000.00, 3),
--     ('Delivery Driver', 15000);

-- Sample Departments
INSERT INTO Department (name) VALUES
    ('Leadership'),
    ('Upper Management'),
    ('Middle Management'),
    ('Crew');

-- Sample Roles
INSERT INTO Roles (title, salary, department_id) VALUES
    ('CEO', 650000.00, 1),
    ('President', 400000.00, 1),
    ('Vice President', 300000.00, 1),
    ('Area Manager', 200000.00, 2),
    ('District Manager', 150000.00, 2),
    ('Owner', 100000.00, 2),
    ('General Manager', 60000.00, 3),
    ('Assistant Manager', 50000.50, 3),
    ('Shift Manager', 45000.00, 3),
    ('Shift Leader', 40000.50, 3),
    ('Cashier', 25000.00, 4),
    ('Prep Cook', 23500.00, 4),
    ('Receptionist', 20000.00, 4),
    ('Delivery Driver', 15000.00, 4);

-- Sample Employees
INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES
    ('Mario', 'Marcio', 1, NULL), 
    ('Andrew', 'Vidalia', 2, 1), 
    ('Mark', 'Roberts', 3, 2), 
    ('Tim', 'Nosral', 4, 3), 
    ('Dj', 'Pritt', 5, 4), 
    ('Marco', 'Lopez', 6, 4), 
    ('Tyler', 'Skreet', 7, 6), 
    ('Johnny', 'Sabbard', 8, 7), 
    ('Carlos', 'White', 9, 8),
    ('Isaiah', 'Smith', 10, 8),
    ('Michael', 'Meyers', 10, 8),
    ('Danya', 'Thompson', 11, 9),
    ('Greg', 'Spears', 12, 9),
    ('Samantha', 'Griegen', 13, 10),
    ('Seretha', 'Jones', 14, 10),
    ('Nathan', 'Booleaux', 14, 10);
    

