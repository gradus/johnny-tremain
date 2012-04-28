var app, cc, filed, fs, index, johnny, pin, tremain;

app = require('apprentice');

pin = require('linchpin');

fs = require('fs');

filed = require('filed');

cc = require('coffeecup');

index = require('./views/index');

johnny = require('./views/johnny');

tremain = require('./views/tremain');

pin.on('GET', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  return res.end(cc.render(index));
});

pin.on('GET/johnny', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  return res.end(cc.render(johnny));
});

pin.on('GET/tremain', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  return res.end(cc.render(tremain));
});

pin.on('GET/public/*/*', function(req, res) {
  return filed("" + __dirname + "/../" + req.url).pipe(res);
});

app.httpServer.listen(3000);

console.log("listening on port 3000");
