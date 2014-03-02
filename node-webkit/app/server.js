var express = require('express'),
    routes = require('./routes'),
    utils = require('./utils'),
    http = require('http'),
    path = require('path'),
    nedb = require('nedb');

var db = {
    items: new nedb({ filename: 'db/items.db', autoload: true })
};

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 4972);
    app.set('views', __dirname + '/public/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', routes.index);
app.get('/users', user.list);

app.get('/api', function (req, res) {
    res.send('API is running');
});


app.get('/items', function (req, res) {
    db.items.find({}, function(err, result) {
        res.send(result);
    });
});

app.post('/items', function (req, res) {
    var item = req.body;
    db.items.insert(item, function (err, result) {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log('Success: ' + JSON.stringify(result));
            res.send(result);
        }
    });
});

app.delete('/items/:id', function (req, res) {
    var id = req.params.id;
    db.items.remove({_id: id}, {}, function (err, result) {
        if (err) {
            res.send({'error':'An error has occurred - ' + err});
        } else {
            console.log('' + result + ' document(s) deleted');
            res.send(req.body);
        }
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
