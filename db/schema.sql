DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

USE employer_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role(
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL
  salary DECIMAL
  department_id INT NOT NULL
);

CREATE TABLE employee(
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL
  last_name VARCHAR(30) NOT NULL
  role_id INT NOT NULL
  manager_id INT NOT NULL
);