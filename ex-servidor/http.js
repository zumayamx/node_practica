const http = require('node:http') /* Protocolo HTTP */

const { findAvailablePort } = require('./free-port.js') /* Importamos nuestro modulo */

const desiredPort = process.env.PORT || 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.end('<h1>Página de inicio<h1>')
    }
    else if (req.url === '/about') {
        res.end('<h1>Página de información<h1>')
    }
    else {
        res.statusCode = 404
        res.end('<h1>Página no encontrada<h1>')
    }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then (port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${server.address().port}`)
    })
}) .catch (err => {
    console.log('Error al buscar puerto disponible, ', err)
})

