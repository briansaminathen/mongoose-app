module.exports = function Routes (app, server, User) {

    app.get('/', function (req, res) {
        User.find({}, function (err, user) {
            console.log(user[0].firstname);
            var person = {
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age
            }

        });
        res.render('index');
    });

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