const http = require('node:http') /* Protocolo HTTP */
const { findAvailablePort } = require('./free-port.js') /* Importamos nuestro modulo */

console.log(process.env) /* Visualizar todas las variables de entorno del SO */

const desiredPort = process.env.PORT || 3000 /* Variable de entorno, si no se pasa, se usa el puerto 3000 */

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello world')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${server.address().port}`)
    })
}) .catch (err => {
    console.log('Error al buscar puerto disponible, ', err)
})

