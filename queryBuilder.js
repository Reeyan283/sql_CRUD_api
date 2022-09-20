class queryBuilder {
    insert(table, values) {
        let a = `INSERT INTO ${table} (`;
        let b = `) VALUES (`;

        for (let key in values) {
            let value = values[key]

            a+=`\`${key}\`, `;

            switch (typeof value) {
                case "number":
                    value = `${value}`;
                    break;
                case "string":
                default:
                    value = `"${value}"`;
                    break;
            }
            b+=`${value}, `;
        }

        return a.substring(0, a.length-2) + (b.substring(0, b.length-2)) + ");";
    }

    select(table, columns) {
        let a = `SELECT `;
        let b = `FROM ${table};`;

        if (typeof columns == "string") {
            columns = [columns]
        }

        columns.forEach((column) => {
            a+=`${column}, `;
        })

        let query = a.substring(0, a.length-2) + " " + b;
        return query;
    }

    update(table, values, conditions) {
        let query = `UPDATE ${table} SET `;
        for (let key in values) {
            query+=`\`${key}\` = `;
            query += (typeof values[key] == "string") ? `"${values[key]}", ` : `${values[key]}, `;
        }
        query = query.substring(0, query.length-2) + " WHERE ";
        conditions.forEach((condition) => {
            let args = condition.split(" ");
            let column = args[0];
            let operator = args[1];
            let value = args[2];
            query+=`\`${column}\` ${operator}  `;
            query += (typeof value == "string") ? `"${value}", ` : `${value}, `;
        });
        query = query.substring(0, query.length-2) + ";";

        return query;
    }

    delete (table, conditions) {
        let query = `DELETE FROM ${table} WHERE `;
        conditions.forEach((condition) => {
            let args = condition.split(" ");
            let column = args[0];
            let operator = args[1];
            let value = args[2];
            query+=`\`${column}\` ${operator}  `;
            query += (typeof value == "string") ? `"${value}", ` : `${value}, `;
        });
        query = query.substring(0, query.length-2) + ";";

        return query;
    }
}

module.exports = queryBuilder;
