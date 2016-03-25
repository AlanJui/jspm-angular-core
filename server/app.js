var express = require('express'),
  server = express(),
  port = 20080;

server.use(express.static(__dirname + '/../client'));
server.listen(port);

///*eslint no-console: 0*/
console.log('Server listening at localhost: ' + port + '/');
