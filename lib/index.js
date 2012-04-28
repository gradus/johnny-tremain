var app, bootstrapCSS, bootstrapJS, cc, fs, index, johnny, pin, tremain;

app = require('apprentice');

pin = require('linchpin');

fs = require('fs');

cc = require('coffeecup');

index = '';

johnny = '';

tremain = '';

fs.readFile('./src/views/index.coffee', 'utf8', function(err, data) {
  return index += data;
});

fs.readFile('./src/views/johnny.coffee', 'utf8', function(err, data) {
  return johnny += data;
});

fs.readFile('./src/views/tremain.coffee', 'utf8', function(err, data) {
  return tremain += data;
});

console.log(index);

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

bootstrapJS = '';

bootstrapCSS = '';

fs.readFile(__dirname + '/../public/js/bootstrap.min.js', function(err, data) {
  return bootstrapJS += data;
});

fs.readFile(__dirname + '/../public/css/bootstrap-responsive.min.css', function(err, data) {
  return bootstrapCSS += data;
});

pin.on('GET/bootstrapJS', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  return res.end(bootstrapJS);
});

pin.on('GET/bootstrapCSS', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });
  return res.end(bootstrapJS);
});

app.httpServer.listen(3000);

console.log("listening on port 3000");
