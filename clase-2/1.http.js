const http = require('node:http')
const desiredPort = process.argv[2] ?? 0
const fs = require('node:fs')

const processRequest = (req, res) => {
  res.setHeader('content-type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/struct.png') {
    fs.readFile('./struct.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Error al leer la imagen</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('Bienvenido a mi página de contacto')
  } else {
    res.statusCode = 404
    res.end('Página no encontrada')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
