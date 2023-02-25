let express = require('express');
let app = express();

console.log("Hello World");

// 1. Meet the Node console
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

// 3. Serve Static Assets

let publicPath = __dirname + '/public';
app.use('/', express.static(publicPath));

// 2. Serve an HTML File
console.log(__dirname)
let htmlPath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.sendFile(htmlPath);
})
























 module.exports = app;
