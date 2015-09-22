/**
 * Created by himanshu on 19/9/15.
 */
// Call the express library
var express = require('express');
// Define our express application
var app = express();
app.set('view engine', 'ejs');

// Respond to the application root directory call with template engine
app.get('/', function (request, response) {
    response.render('default');
});

// Set different routing for single page application
app.get('/who', function (request, response) {
   response.send('himanshupathak3');
});
app.get('/about', function (request, response) {
   response.send('Web Developer');
});

// Receive URL parameters from URL
app.get('/my/:name?', function (request, response) {
    response.send('Hello <strong>' + request.params.name + '</strong> you are found on this page.');
});

var server = app.listen(3000, function () {
    console.log('Application is listening to port 3000');
});
