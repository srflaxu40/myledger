
CREATE USER myledger;

CREATE DATABASE myledger OWNER=myledger CONNECTION LIMIT=10000;

CREATE TABLE auth(
  name varchar(255) NOT NULL,
  jwt varchar(255) NOT NULL,
  googleId varchar(255) NOT NULL,
  googleEmail varchar(255)
); 

ALTER TABLE auth ADD COLUMN imageUrl varchar(255) NOT NULL, ADD COLUMN givenName char(100), ADD COLUMN familyName varchar(100); 

ALTER TABLE auth ADD PRIMARY KEY (googleId);

ALTER TABLE auth ADD COLUMN timestamp TIMESTAMP;
ALTER TABLE auth ALTER COLUMN timestamp SET DEFAULT NOW();

