let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

// 1. Meet the Node console
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

// Implement a Root-Level Request Logger Middleware

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
})

// 3. Serve Static Assets
// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

// 2. Serve an HTML File
console.log(__dirname)
let htmlPath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.sendFile(htmlPath);
})

//Serve JSON on a Specific Route
//Use the .env File
app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({message: "HELLO JSON"});
    }
    else {
        res.json({message: "Hello json"});
    }
})
























 module.exports = app;
