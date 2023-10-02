let express = require('express');
let app = express();
let result = "Hello World"
let port = 3000;
console.log(result)

// let HANDLER = function (req, res) {
//     res.send('Hello Express')
// }
let IndexView = function (req, res) {
    res.sendFile("index.html", {root: 'views'});
}
let JSONpath = function (req, res ){
    res.json({"message": "Hello json"})
}
app.get("/", IndexView)
app.get("/json", JSONpath )

app.use("/public", express.static(__dirname + '/public'))


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });































 module.exports = app;
