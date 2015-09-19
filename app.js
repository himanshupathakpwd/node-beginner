/**
 * Created by himanshu on 19/9/15.
 */
var http = require('http');
var myServer = http.createServer(function (request, response) {
    response.writeHead('200', {"Content-Type" : "text/plain"});
    response.write('Hello World');
});
myServer.listen(3000);
