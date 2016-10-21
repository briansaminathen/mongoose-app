module.exports = function Routes (app, server, User) {


    // GET Routes
    // Root route will display all animals
    app.get('/', function (req, res) {
        User.find({}, function (err, user) {
            res.render('index',{user: user});
        });
    });
    
    app.get('/new', function (req, res) {
        res.render('new');
    });

    app.get('/:id/edit', function (req, res) {
        res.render('edit');
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