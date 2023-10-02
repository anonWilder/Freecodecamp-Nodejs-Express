let express = require('express');
let app = express();
let result = "Hello World"
console.log(result)

let HANDLER = function (req, res) {
    res.send('Hello Express')
}
app.get("/ben", HANDLER)




































 module.exports = app;
