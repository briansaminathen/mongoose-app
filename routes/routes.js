module.exports = function Routes (app, server, Animal) {
    app.get('/:id/delete', function (req, res) {
        Animal.remove({_id: req.params.id}, function (err, results) {
            console.log(results);
            res.redirect('/');
        });
    })

    // Root route will display all animals
    app.get('/', function (req, res) {
        Animal.find({}, function (err, results) {
            if (err) { console.log(err) };
            res.render('index', {results: results});
        });
    });

    // new route to create animal in database, redirect to '/'
    app.post('/', function (req, res) {
        Animal.create(req.body, function (err, result) {
            if (err) {console.log(err)};
            res.redirect('/');
        });
    });

    app.get('/new', function (req, res) {
        res.render('new');
    });

    app.get('/:id/edit/', function (req, res) {
        Animal.find({_id: req.params.id}, function (err, response) {
            console.log(response);
            res.render('edit', {Animal: response[0]});
        })
    });

    app.post('/:id', function (req, res) {
        // update animal

        console.log('Need to update dog', req.params.id);
        Animal.update({_id: req.params.id},req.body, function (err, result) {
        res.redirect('/');
        })
    })

    app.get('/:id', function (req, res) {
        res.render('show')
    });



    // POST Routes
    app.post('/users', function (req, res) {
        console.log("POST DATA", req.body);

        // create a new User with the name and age corresponding to those from req.body
        var user = new User({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age});
        user.save(function (err) {
            if(err) {
                console.log('something went wrong');
            } else {
                console.log('You successfully added a user');
                res.redirect('/');
            }
        })
    })


}