//this file will run the server; no other major functionality
var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser');
var blogEngine = require('./blog');

app.use(express.static('public')); 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser());
 
app.get('/', function(req, res) {
    res.render('index',{title:"My Blog", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
    res.render('about', {title:"About Me"});
});
 
app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article',{title:entry.title, blog:entry});
});

app.get("/test", function(req, res) {
			res.send('<h1>TEST</h1>');
		});

app.listen(3000);
console.log("App listening at port 3000");
