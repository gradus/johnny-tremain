app = require 'apprentice'
pin = require 'linchpin'
fs = require 'fs'
filed = require 'filed'
cc = require 'coffeecup'

index = require './views/index'
johnny = require './views/johnny'
tremain = require './views/tremain'


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
pin.on 'GET/public/*/*', (req, res) -> filed("#{__dirname}/../#{req.url}").pipe(res)

app.httpServer.listen 3000
console.log "listening on port 3000"
