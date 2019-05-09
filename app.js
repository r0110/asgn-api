var express = require('express');
var app = express(); 
const PORT = process.env.PORT || 3500;
var bodyParser = require('body-parser');

//Router
var asgnRoute = require('asgn-router');

//Database
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/assignments', {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(asgnRoute);

app.listen(PORT, () => {
    console.log('API running on ' + PORT);
});