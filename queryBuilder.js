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
}

module.exports = queryBuilder;
