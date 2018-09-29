
CREATE USER myledger;

CREATE DATABASE myledger OWNER=myledger CONNECTION LIMIT=10000;

CREATE TABLE myledger(
  name varchar(255) NOT NULL,
  jwt varchar(255) NOT NULL,
  googleId varchar(255) NOT NULL,
  googleEmail varchar(255)
); 

ALTER TABLE myledger ADD COLUMN imageUrl varchar(255) NOT NULL, ADD COLUMN givenName char(100), ADD COLUMN familyName varchar(100); 

ALTER TABLE myledger ADD PRIMARY KEY (googleId);
