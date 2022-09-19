const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const properties = require("./properties.json");
const queryBuilder = require("./queryBuilder.js");
const handler = require("./handler.js");

let query = new queryBuilder().insert("students", {
    "firstName": "Mary",
    "lastName": "Jane"
});

/*
 * Connect to mysql database
 */
const connection = mysql.createConnection({
    host: "localhost",
    user: "api",
    password: "password",
    database: "school"
});

connection.connect();
connection.query(query);

/*
 * Api stuff
 */

const app = express();

app.use(express.urlencoded({
    extened: true
}));
app.listen(properties.port);

app.post(properties.paths.create, handler.create);
