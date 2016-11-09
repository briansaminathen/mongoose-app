var quote = require('../controllers/quotes');
module.exports = function Routes (app) {

    app.get('/:id/delete', function (req, res) {
        quote.delete(req, res);
    });

    // Root route will display all animals
    app.get('/', function (req, res) {
        quote.rootRoute(req, res);
    });

    // new route to create animal in database, redirect to '/'
    app.post('/', function (req, res) {
        quote.add(req, res);
    });

    app.get('/new', function (req, res) {
        res.render('new');
    });

    app.get('/:id/edit/', function (req, res) {
        quote.getEdit(req, res);
    });

    app.post('/:id', function (req, res) {
        quote.postEdit(req, res);
    });

    app.get('/:id', function (req, res) {
        res.render('show')
    });

} // end of module exports