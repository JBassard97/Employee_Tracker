# Employee_Tracker

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Screenshots](#screenshots)

## Description

This repository contains the source code for my employee_tracker application! This app allows the user to manage and view three different tables in a mysql database. with this program, you can view, add, update, and delete any employee, role, or department at will. There is also a 'seeds.sql' file that can populate these tables after the database has been created. It is inspired heavily by my day-job.

## Installation

You will need to have a few things downloaded in order to view and use this applicaton: mySQL and Node.js. I also recommending using VS Code's integrated terminal. Simply follow these steps to begin:

    1. Clone the project
    2. Right-click the 'index.js' file and select 'Open in Integrated Terminal'
    3. Open your mySQL shell in that terminal by entering 'mysql -u root' if you don't have a password, 'mysql -u root -p' if you do
    4. Create the database and its tables by entering 'SOURCE db/schema.sql;'
    5. This is optional, but if you'd like to populate these new tables with "dummy-data", you can enter 'SOURCE db/seeds.sql;'
    6. Once you've done that and it shows that many rows have been added, you can exit mySQL shell by entering 'quit' OR 'exit'

## Usage

Link to project: https://github.com/JBassard97/Employee_Tracker

Once you've followed the steps in "Installation", you can begin the application in the Integrated Terminal by entering: 'node index'. You'll then be greeted by a small table with the database name, and the names of the three tables. You'll also be displayed a list of actions that you can select using the arrow keys and 'Enter'. If you chose to not prepopulate your tables, you'll need to start off by adding a department, then a role, then an employee. If you did run the 'seeds.sql' file, example data will already be present and all viewing options will now work. (NOTE: the "dummy-data" is quite large and can throw off the formatting of the "Employees" table if it's not viewed on a large enough screen. To fix this, minimize your File Explorer on the left side to give the Terminal more real-estate. If you're viewing this in a large enough window, it won't be a problem either.)

## License

MIT

## Screenshots
[Employee_Tracker Demo.webm](https://github.com/JBassard97/Employee_Tracker/assets/142551579/5d712f55-9f92-4908-8806-50ef97981436)

<img width="264" alt="Screenshot 2023-12-12 144544" src="https://github.com/JBassard97/Employee_Tracker/assets/142551579/ecefb950-93f1-4981-b2ad-be9779b181e6">
<img width="811" alt="Screenshot 2023-12-12 144628" src="https://github.com/JBassard97/Employee_Tracker/assets/142551579/ebb011f5-db22-460b-a07f-b994702aead0">
<img width="533" alt="Screenshot 2023-12-12 144957" src="https://github.com/JBassard97/Employee_Tracker/assets/142551579/8bd552cf-5f62-40ad-b5e4-180c37cc3b54">
<img width="345" alt="Screenshot 2023-12-12 145016" src="https://github.com/JBassard97/Employee_Tracker/assets/142551579/aa6bfd47-be93-44c7-8139-7e352a640e7f">



