Note-taking / CRUD
========

### A simple and nice note-taking app, optimized for both mobile and desktop web browsers.

## Technologies:
* Node.js
  * express
  * body-parser
  * pug
  * mysql
  * node-env-file
  * express-session
 * mySql
 * css

## Features
- [x] Add notes
- [x] Delete notes
- [x] Edit notes

## Screenshot

<img src="https://user-images.githubusercontent.com/61896147/89110988-9dd04180-d41e-11ea-81e2-7cb65673ad24.png"/>
<img src="https://user-images.githubusercontent.com/61896147/89110996-bcced380-d41e-11ea-8aaf-09606ae9e860.png" height='700px'/>

## Setup:

**Install Dependecies:**
```
npm i mysql express express-session body-parser pug morgan node-env-file
```

**Create the database:**

```sql
CREATE DATABASE notes;

USE notes;
```

**Create and modify the table**

```sql
CREATE TABLE nts(
id INT(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(18) NOT NULL,
content TEXT NOT NULL,
upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

```


**Environment Variables on the .env file required**

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`


**Start it up the app:**
```
npm run start
```
