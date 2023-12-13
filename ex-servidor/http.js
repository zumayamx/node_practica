const http = require('node:http') /* Protocolo HTTP */
const fs = require('node:fs') /* Sistema de archivos */

const { findAvailablePort } = require('./free-port.js') /* Importamos nuestro modulo */

const desiredPort = process.env.PORT || 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.end('<h1>Página de inicio<h1>')
    }
    else if (req.url === '/imagen_first') {
       
        fs.readFile('./imagen_first.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>Error interno<h1>')
            } else {
                res.setHeader('Content-Type', 'image/png') /* Decirle que tipo de contenido es para que lo interprete el navegador */
                res.end(data)
            }
        })
        
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

