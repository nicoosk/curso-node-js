const http = require('node:http')
const { findAvailablePort } = require('./10.free-ports.js')
const desiredPort = process.argv[2] ?? 0
const server = http.createServer((req, res) => {
  console.log('Petición recibida')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log('Servidor escuchando en el puerto ', `http://localhost:${port}`)
  })
})
