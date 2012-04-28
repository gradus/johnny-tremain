app = require 'apprentice'
pin = require 'linchpin'
fs = require 'fs'
cc = require 'coffeecup'
#pages
index = ''
johnny = ''
tremain = ''

fs.readFile('./src/views/index.coffee', 'utf8', (err,data) -> index += data )
fs.readFile('./src/views/johnny.coffee', 'utf8', (err,data) ->  johnny += data )
fs.readFile('./src/views/tremain.coffee', 'utf8', (err,data) ->  tremain += data )

console.log index
pin.on('GET', (req, res) ->
  res.writeHead(200, {'content-type': 'text/html'})
  res.end(cc.render(index))
)

pin.on('GET/johnny', (req, res) ->
  res.writeHead(200, {'content-type': 'text/html'})
  res.end(cc.render(johnny))
)

pin.on('GET/tremain', (req, res) ->
  res.writeHead(200, {'content-type': 'text/html'})
  res.end(cc.render(tremain))
)

# Static Files
bootstrapJS = ''
bootstrapCSS = ''

fs.readFile(__dirname + '/../public/js/bootstrap.min.js', 'utf8', (err,data) ->  bootstrapJS += data )
fs.readFile(__dirname + '/../public/css/bootstrap.min.css', 'utf8', (err,data) ->  bootstrapCSS += data )

#Static Routes
pin.on('GET/js', (req, res) ->
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(bootstrapJS)
)

pin.on('GET/css', (req, res) ->
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(bootstrapCSS)
)

app.httpServer.listen 3000
console.log "listening on port 3000"
