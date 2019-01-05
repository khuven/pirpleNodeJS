var data = require('./data');
/*
data.create('test','John',{'name':"John", 'Surname':'Constantine'},function(err){
    console.log("This is the error",err);
});*/

data.update('test','John', {"name":"Johnathan","surname" :"Moses" },function(err){
   console.log('This is the error2', err);
});

data.read('test','John',function(err,data){
    console.log('This is the error', err,'This is the data', data);
});
