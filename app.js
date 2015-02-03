//this file will run the server; no other major functionality
var express = require('express');
var app = express();

app.get("/", function(req, res) {
			console.log("request for " + req.url);
			res.send("<h1>Hello World!</h1>");
		});
app.listen(3000);
console.log("App listening at port 3000");
