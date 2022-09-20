const axios = require("axios");

exports.insert = () => {
    axios.post("http://localhost:3000/C", {
        "table": "students",
        "values": {
            "lastName": "Marry",
            "firstName": "Jane",
        }
    }).then().catch(e=>{console.error(e)});
}

exports.read = () => {
    axios.post("http://localhost:3000/R", {
        "table": "students",
        "columns": "id"
    }).then().catch(e=>{console.error(e)});
}

exports.update = () => {
    axios.post("http://localhost:3000/U", {
        "table": "students",
        "values": {
            "lastName": "Garcia",
            "firstName": "Maria"
        },
        "conditions": {
            "id": 2
        }
    }).then().catch(e=>{console.error(e)});
}

exports.delete = () => {
    axios.post("http://localhost:3000/D", {
        "table": "students",
        "conditions": {
            "id": 2
        }
    }).then().catch(e=>{console.error(e)});
}
