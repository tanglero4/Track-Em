const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

// const logo = require('asciiart-logo');
// const config = require('./package.json');
// console.log(logo(config).render());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Password',
    database: 'employer_db'
  },
  console.log(`Connected to the employer_db database.`)
);

// Query database
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

  const selector = ()=>{
    inquirer.prompt([
      {
        type: "list",
        name: "selections" ,
        message: "What would you like to do?",
        choices: ["View all Departmets", "Add Department", "Remove Department", "Nevermind"]
      }
  
    ]).then(answers=>{
      switch (answers.selections) {
        case "View all Departmets": 
          
          return viewDepartment();

          case "Add Department": 
          
          return addDepartment();

          case "Remove Department": 
          
          return removeDepartment();

        default:
          return process.exit();
      }
    })
  }
  const viewDepartment = ()=> {
    db.query("SELECT name DEPARTMENT FROM DEPARTMENT", function (err, results) {
      if (err) throw err;
      console.table(results, ["DEPARTMENT"]);
      db.end();
      console.log(results);
    });
   }
   const addDepartment = ()=> {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?"
      }
  
    ]).then(answers=>{
    db.query("INSERT INTO DEPARTMENT SET name = ?",[answers.name], function (err, results) {
      if (err) throw err;
      console.table(results, ["DEPARTMENT"]);
      db.end();
      console.log(results);
    })
    });
   }
  selector();