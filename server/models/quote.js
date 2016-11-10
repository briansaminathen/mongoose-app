var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight : Number
}, {timestamps: true});

var Quote = mongoose.model('Animal', UserSchema); // We are setting this Schema in our Models as Animal
