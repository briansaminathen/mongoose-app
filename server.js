// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 7500;


// Create express app
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
}, {timestamps: true});


mongoose.model('User', UserSchema); // We are setting this Schema in our Models as User


var User = mongoose.model('User'); // We are retrieving this Schema from our Models name User


app.use(express.static(path.join(__dirname, './static')));

// Tell server where views are and what templating engine I"m using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



var server = app.listen(port, function () {
    console.log('Mongoose Dashboard running on port ' + port);
});

var route = require("./routes/routes.js")(app, server, User);
