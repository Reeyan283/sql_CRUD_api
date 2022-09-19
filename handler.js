const queryBuilder = require("./queryBuilder.js");

exports.create = (req, res, connection) => {
    const table = req.body.table;
    const values = req.body.values;
    /* validate request */
    if (!req.body) {
        return res.status(400).send({
            message: "Request cannot be empty."
        });
    }
    if (!table) {
        return res.status(400).send({
            message: "Request must include table name."
        });
    }
    if (!values) {
        return res.status(400).send({
            message: "Request must include values."
        });
    }

    const query = new queryBuilder().insert(table, values); 
    connection.query(query);
};

exports.read = (req, res, connection) => {
    const table = req.body.table;
    /* validate request */
    if (!req.body) {
        return res.status(400).send({
            message: "Request cannot be empty."
        });
    }
    if (!table) {
        return res.status(400).send({
            message: "Request must include table name."
        });
    }

}
