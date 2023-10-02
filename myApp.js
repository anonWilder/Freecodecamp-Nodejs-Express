let express = require('express');
let app = express();
let result = "Hello World"
console.log(result)

let HANDLER = function (req, res) {
    res.send('Hello Express')
}
app.get("/", HANDLER)




































 module.exports = app;
