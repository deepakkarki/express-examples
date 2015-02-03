//this file will run the server; no other major functionality
var express = require('express');
var app = express();

app.get("/", function(req, res) {
			console.log("request for " + req.url);
			res.sendFile('./views/index.html');
		});

app.get("/about", function(req, res) {
			res.sendFile('./views/about.html');
		});

app.get("/article", function(req, res) {
			res.sendFile('./views/article.html');
		});

app.get("/test", function(req, res) {
			res.send('<h1>TEST</h1>');
		});

app.listen(3000);
console.log("App listening at port 3000");
