// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 7500;


// Create express app
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

// Tell server where views are and what templating engine I"m using
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
require('./server/models/quote.js');



app.listen(port, function () {
    console.log('Mongoose Dashboard running on port ' + port);
});

var route = require("./server/config/routes.js")(app);
