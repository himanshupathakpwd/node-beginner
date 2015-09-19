/**
 * Created by himanshu on 19/9/15.
 */
// Call the express library
var express = require('express');
// Define our express application
var app = express();

// Respond to the application root directory call
app.get('/', function (request, response) {
    response.send('<h1>Hello World,</h1>I am in express.');
});

var server = app.listen(3000, function () {
    console.log('Application is listening to port 3000');
});
