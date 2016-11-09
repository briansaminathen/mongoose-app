var mongoose = require('mongoose');
var Quote = mongoose.model('Animal');
module.exports = {
    rootRoute: function (req, res) {
        Quote.find({}, function (err, results) {
            res.render('index',{results: results});
        })
    },

    delete: function (req, res) {
        Quote.remove({_id: req.params.id}, function (err, results) {
            if (err) {
                console.log('There is an err', err);
            } else {
                console.log("You're item has successfully been deleted");
        res.redirect('/');
            }
        });
    },

    add: function (req, res) {
        Quote.create(req.body, function (err, results) {
            if(err) {
                console.log('There is an error', err);
            } else {
                console.log('You successfully added an animal');
            }
        })
        res.redirect('/');
    },

    getEdit: function (req, res) {
        Quote.find({_id: req.params.id}, function (err, results) {
            console.log(results);
            res.render('edit', {Animal: results[0]});
        })
    },

    postEdit: function (req, res) {
        Quote.update({_id: req.params.id}, req.body, function (err, result) {
            res.redirect('/');
        })
    }
} // end of module exports