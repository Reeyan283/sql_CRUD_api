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
    connection.query(query, (err, results) => {
        return console.log(results);
        if (err) return res.status(400).send(err);

        return res.status(200).send(results[0]);
    });

};

exports.read = (req, res, connection) => {
    const table = req.body.table;
    const columns = req.body.columns;
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
    if (!columns) {
        return res.status(400).send({
            message: "Request must include columns."
        });
    }

    
    const query = new queryBuilder().select(table, columns); 
    connection.query(query, (err, results) => {
        if (err) return res.status(400).send(err);

        return res.status(200).send(results[0]);
    });
}

exports.update = (req, res, connection) => {
    const table = req.body.table;
    const values = req.body.values;
    const conditions = req.body.conditions;
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
            message: "Request must include columns."
        });
    }
    if (!conditions) {
        return res.status(400).send({
            message: "Request must include columns."
        });
    }
    
    const query = new queryBuilder().update(table, values, conditions); 
    connection.query(query, (err, results) => {
        if (err) return res.status(400).send(err);

        return res.status(200).send(results[0]);
    });
       
}

exports.delete = (req, res, connection) => {
    const table = req.body.table;
    const conditions = req.body.conditions;
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
    if (!conditions) {
        return res.status(400).send({
            message: "Request must include columns."
        });
    }
    
    const query = new queryBuilder().delete(table, conditions); 
    connection.query(query, (err, results) => {
        if (err) return res.status(400).send(err);

        return res.status(200).send(results[0]);
    });
       
}
