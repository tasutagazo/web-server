var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' time: ' + date);
		next();
	}
}
app.use(middleware.logger);
// req = request made by the user 
// res = what we want to send back
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('Najib is the best bitch in the world!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log("Using Port " + PORT);
});