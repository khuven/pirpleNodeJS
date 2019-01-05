/*

Library for storing and editing data
 */

var fs = require('fs');
var path = require('path');


//Base directory of job
var lib ={};
lib.baseDir =  path.join(__dirname,'/../.data/' );

console.log(path.sep);
//write data
lib.toFilePath = function(dir,file){
    var fullpath =  lib.baseDir+dir+path.sep+file+'.json';
    console.log("This is the full path :", fullpath);
    return fullpath;

}

lib.create =  function(dir,file,data,callback){
  fs.open(lib.toFilePath(dir,file),'wx', function(err,fileDescriptor){
    if (! err){
        //Convert data to string
        var stringData = JSON.stringify(data);
        fs.write(fileDescriptor,stringData,function(err){
           if (!err){
               fs.close( fileDescriptor,function(err2){
                   if (!err2){
                       callback(false);
                   }else{
                       callback("Error closing file here" + err2);
                   }
               })
           }else{
               callback("Error writing to file");
           }

        });


    }else{
        callback("Could not create new file, it may already exist")
    }
    })
    ;

};

lib.update = function(dir,file, data, callback){
    fs.open(lib.toFilePath(dir,file),'r+',function(err, fileDescriptor){
        if (! err){
            fs.truncate(fileDescriptor,function(err){
               if( !err){
                   var dataText =  JSON.stringify(data);
                   fs.writeFile(fileDescriptor,dataText,function(err2){
                       if (!err2){
                           fs.close(fileDescriptor,function(err3){
                               if (err3)
                                    callback("Error closing file", err3);
                           });
                       }else{
                           callback("Error closing file update", err2);
                       }
                   });

               } else{
                   callback("Error truncating file ",err);
               }
            });
        }else{
            callback("Could not open the file ",lib.toFilePath(dir,file) );
        }

    });

};

lib.read =  function ( dir,file,callback){
    fs.readFile(lib.toFilePath(dir,file),'utf8',function(err,data){
       callback(err,data);
    });

}





module.exports=lib;
