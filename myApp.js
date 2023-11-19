require('dotenv').config()

let express = require('express');
let app = express();
let result = "Hello World"
let port = 3001;
console.log(result)

// let HANDLER = function (req, res) {
//     res.send('Hello Express')
// }
 let IndexView = function (req, res) {
     res.sendFile("index.html", {root: 'views'});
 }
// let JSONpath = function (req, res ){
//     let style = process.env.MESSAGE_STYLE || 'uppercase' ;
//     let message = "Hello json";

//     if( style === "uppercase" ){
//         message = message.toUpperCase();
//         console.log(message);
//     } else {
//         message = message;
//     }
//     res.json({"message": message})
// }
app.get("/", IndexView)
var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env.MESSAGE_STYLE === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});

app.use("/public", express.static(__dirname + '/public'))


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });































 module.exports = app;
