var express           = require('express');
var app               = express();
var partials          = require('express-partials'); // allows multiple templates to be rendered
var bodyParser        = require('body-parser'); // parses HTTP request body 

app.set('views', __dirname + '/public');

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080);

module.exports = app;