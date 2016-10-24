module.exports = function Routes (app, server, Animal) {


    // GET Routes
    // Root route will display all animals
    app.get('/', function (req, res) {
        Animal.find({}, function (err, results) {
            res.render('index',{results: results});
        });
    });

    // new route to create animal in database, reidrect to '/'
    app.post('/', function (req, res) {
        Animal.create(req.body, function (err, result) {
            if (err) {console.log(err)};
            res.redirect('/');
            
        })
    })

    
    app.get('/new', function (req, res) {
        res.render('new');
    });

    app.get('/:id/edit', function (req, res) {
        var id = req.params.id;
        res.render('edit', {id: id});
    });

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