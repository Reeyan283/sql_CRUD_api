const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const queryBuilder = require("./queryBuilder.js");
const handler = require("./handler.js");
const test = require("./test.js");

const properties = require("./properties.json");

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
test.update();

/*
 * Api stuff
 */

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(properties.port);

app.post(properties.paths.create, (req, res)=>{handler.create(req, res, connection)});
app.post(properties.paths.read, (req, res)=>{handler.read(req, res, connection)});
app.post(properties.paths.update, (req, res)=>{handler.update(req, res, connection)});
