var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(app.get('port'), function(){
	console.log('node app is on port', app.get('port'));
});