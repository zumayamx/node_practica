const net = require('node:net') /* Conexiones con protocolo TCP */

function findAvailablePort (desirePort) {
    return new Promise ((resolve, reject) => {
        const server = net.createServer()

        server.listen(desirePort, () => {
            const { port } = server.address().port
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
        resolve(0)
    })
}

module.exports = { findAvailablePort }