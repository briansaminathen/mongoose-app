var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
}, {timestamps: true});
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as User
var User = mongoose.model('User'); // We are retrieving this Schema from our Models name User



app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



var server = app.listen(7400, function () {
    console.log('This is the basic mongoose on port 7400');
});

var route = require("./routes/routes.js")(app, server, User);
