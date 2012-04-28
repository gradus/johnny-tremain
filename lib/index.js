var app = require('apprentice'),
  pin = require('linchpin');

pin.on('GET', function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<a href="/johnny">Johnny</a>&nbsp;<a href="/tremain">Tremain</a>');
});

pin.on('GET/johnny', function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<a href="http://en.wikipedia.org/wiki/Johnny_Tremain">Wikipedia about Johnny Tremain</a>');
});

pin.on('GET/tremain', function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<a href="http://en.wikipedia.org/wiki/Apprenticeship">Wikipedia about Apprenticeship</a>');
});

app.httpServer.listen(3000);

