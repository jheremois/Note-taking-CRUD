Note-taking / CRUD
========

### A simple and nice note-taking app, optimized for both mobile and desktop web browsers.

## Technologies:
- Express.js
- mySQL
- Pug template engine

## Features
- [x] Add notes
- [x] Delete notes
- [ ] Edit notes

## Screenshot

<img src="https://user-images.githubusercontent.com/61896147/86874527-8b2c4c00-c0ae-11ea-948e-1110c58966f7.png"/>
<img src="https://user-images.githubusercontent.com/61896147/88469258-885a9500-cebd-11ea-8c46-9e66aa174608.png" height='700px'/>

## Setup:

**Install Dependecies:**
```
npm i mysql express express-session body-parser pug morgan
```
**Install dev-Dependencies:**

```
npm i nodemon -D
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

**Environment Variables required**

`MYSQL_USER` (your mysql user)

`MYSQL_PASSWORD` (your mysql password)


**Start it up the app:**
```
npm run start
```
