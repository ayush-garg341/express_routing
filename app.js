var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var urlEncodedParser = bodyParser.urlencoded({extended: false});

// Default behavior is, it will look into views folder for view files.
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    //console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlEncodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    
    //res.send('You requested to see the profile of name: ' + req.params.name);
    
    // We can bring here more info about user from database and embed into ejs for viewing.

    var data = {age: 23, job: 'Developer', hobbies:['eating', 'fighting', 'swimming']};

    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);