const axios = require("axios");
exports.insert = () => {
    axios.post("http://localhost:3000/C",
    {
        "table": "students",
        "values": {
            "firstName": "Ariadne",
        }
    }).then().catch(e=>{console.error(e)});
}
