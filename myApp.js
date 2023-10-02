let express = require('express');
let app = express();
let result = "Hello World"
console.log(result)

// let HANDLER = function (req, res) {
//     res.send('Hello Express')
// }
let IndexView = function (req, res) {
    res.sendFile("index.html", {root: 'views'});
}
app.get("/", IndexView)
console.log(IndexView)




































 module.exports = app;
