let express = require('express');
let app = express();
let result = "Hello World"
console.log(result)

// let HANDLER = function (req, res) {
//     res.send('Hello Express')
// }
let IndexView = function (req, res) {
    res.sendFile("views\index.html")
}
app.get("/", IndexView)
console.log(IndexView)




































 module.exports = app;
