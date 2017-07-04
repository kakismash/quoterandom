//autoload routes controller
var refautload = require('fs');
var path = require('path');

var files = refautload.readdirSync(__dirname);

files.forEach(function(file){
  var fileName = path.basename(file, '.js');
  if(fileName !== 'index'){
    exports[fileName] = require('./'+ fileName);
  }
});
