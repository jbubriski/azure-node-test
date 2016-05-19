var fs = require('fs');
var express = require('express');

var port = process.env.port || 1337;

var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  fs.readFile('./index.html', 'utf8', function(err, data) {
    if(!err)res.send(data);
    else res.status(500).send(err);
  });
});

var server = http.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server started');
  console.log('    Game: http://%s:%s', host, port);
});
