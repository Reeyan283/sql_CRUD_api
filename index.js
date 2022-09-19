const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

/*
 * Connect to mysql database
 */
const connection = mysql.createConnection({
    host: "localhost",
    user: "api",
    password: "password",
    database: "school
)};

connection.connect();

/*
 * Api stuff
 */

const app = express();

app.use(bodyParser.urlencoded({
    extened: true
}));
app.use(express.static("public"));


