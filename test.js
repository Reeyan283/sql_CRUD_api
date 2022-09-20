const axios = require("axios");

exports.create = () => {
    axios.post("http://localhost:3000/C", {
        "table": "students",
        "values": {
            "lastName": "Marry",
            "firstName": "Jane",
        }
    }).then((res)=>{console.log(`${res.status}: ${res.statusText} \n ${res.data}`)}).catch(e=>{console.error(e)});
}

exports.read = () => {
    axios.post("http://localhost:3000/R", {
        "table": "students",
        "columns": "*"
    }).then((res)=>{console.log(`${res.status}: ${res.statusText} \n ${JSON.stringify(res.data, null, 4)}`)}).catch(e=>{console.error(e)});
}

exports.update = () => {
    axios.post("http://localhost:3000/U", {
        "table": "students",
        "values": {
            "lastName": "Smith",
            "firstName": "John"
        },
        "conditions": [
            "id = 2"
        ]
    }).then((res)=>{console.log(`${res.status}: ${res.statusText}`)}).catch(e=>{console.error(e)});
}

exports.delete = () => {
    axios.post("http://localhost:3000/D", {
        "table": "students",
        "conditions": [
            "id > 2"
        ]
    }).then((res)=>{console.log(`${res.status}: ${res.statusText}`)}).catch(e=>{console.error(e)});
}
