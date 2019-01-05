/*
*
*/
//Dependencies

const http =  require('http');
const url = require('url');
const StringDecoder =  require('string_decoder').StringDecoder;
//const queryStr = re


//The server should respond to all request with a
const server = http.createServer(function(req,res) {
    //get url and parse url
    var parseQueryString = true;
    var urlPath = url.parse(req.url, parseQueryString);


    var path = urlPath.pathname;
    var trimmedPath = path.replace(/\/+|\/+$/g,'');
    // var s2 =             x.replace(/\/+|\/$/g,'');
    //geszt pathr
    var method = req.method;
    var headers =  req.headers;
    var queryStr = urlPath.query;
     console.log("Query String" ,queryStr);
     console.log("Trimmed path=",trimmedPath,path);
     // console.log("headers",headers);

     var decoder = new StringDecoder('utf-8');
     var buffer = '';


     req.on('data', function(data){
         console.log('Data event was emitted')
        buffer+= decoder.write(data);

         resp.setHeader('Content-Type','application/json');


     });



     req.on('end', function () {
        console.log('Data event was emitted')
         buffer += decoder.end();

       var myData =  JSON.parse(buffer);

       console.log(myData.msg);


        console.log('Payload =',buffer);

     });



   //Get the payload



    res.end('Hello World ' + urlPath.pathname+"Method=" + method +" headerVal=" +headers['user-agent']);
});


server.listen(3000,function () {
        console.log('Listening on port 3000'  );
    });


//Define handlers
var handlers= {};
handlers.update = function(data,req,resp){
  //process Data

    var data = {
       'msg': 'Data has been updated',
    }


  //generate response


};




//

