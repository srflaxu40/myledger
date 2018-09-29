
CREATE USER myledger;

CREATE DATABASE myledger OWNER=myledger CONNECTION LIMIT=10000;

CREATE TABLE myledger(
  name varchar(255) NOT NULL,
  jwt varchar(255) NOT NULL,
  googleId varchar(255) NOT NULL,
  googleEmail varchar(255)
); 
