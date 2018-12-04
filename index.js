/*
*
*/
//Dependencies

const http =  require('http');
const url = require('url');
//const queryStr = re


//The server should respond to all request with a
const server = http.createServer(function(req,res) {
    //get url and parse url
    var parseQueryString = true;
    var urlPath = url.parse(req.url, parseQueryString);

    //geszt path
    var method = req.method;
    var headers =  req.headers;
    var queryStr = urlPath.query;
     console.log("Query String" ,queryStr);
     console.log("headers",headers);

    res.end('Hello World ' + urlPath.pathname+"Method=" + method +" headerVal=" +headers['user-agent']);
});


server.listen(3000,function () {
        console.log('Listening on port 3000'  );
    });




