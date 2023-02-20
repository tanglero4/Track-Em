const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});