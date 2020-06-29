Note-taking / CRUD
========

*A simple and nice note-taking.*

Made using Node.js, Express, Pug (as template engine), css & Mysql.


### THE SET UP:

**Install Dependecies:**
```
npm i mysql express express-session body-parser pug morgan
```
**Install dev-Dependencies:**

```
npm i nodemon -D
```

**Put your Mysql user and password at "src/database/conection.js"**

```
const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user:  'root', //<--- your user
        password:  'root', // <--- your password
        database:  'notes'
    });
}
```

**Create the database:**

```
CREATE DATABASE notes;

USE notes;
```

**Create and modify the table**

```
CREATE TABLE nts(
id INT(11) NOT NULL,
title VARCHAR(18) NOT NULL,
content VARCHAR(50) NOT NULL
);

ALTER TABLE nts
    ADD PRIMARY KEY (id);

ALTER TABLE nts
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE nts
    MODIFY content TEXT;
```

**Start it up the app:**
```
npm run start
```
