const express = require('express')
const app = express()
const routerProductos = require("./productos");
const cors = require('cors');
var bodyParser = require('body-parser')
const port = 8080

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use('/static', express.static(__dirname + '/public'));

app.use("/productos",routerProductos)


app.listen(8080)