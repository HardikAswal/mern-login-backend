const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

var admin = require('./routes/admin.js');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',admin);

app.listen(8080,function(req,res){
    console.log("Server Started.");
})