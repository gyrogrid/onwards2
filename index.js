var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(app.get('port'), function(){
	console.log('node app is on port', app.get('port'));
});

/*var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});*/