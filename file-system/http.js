const http = require('node:http') /* Protocolo HTTP */


const server = http.createServer((req, res) => {
     console.log('Request received')
     res.end('Hello world')
})

server.listen(0, () => { /* Utilizar puerto 0 para que el sistema operativo asigne un puerto disponible */
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})

/* No recomendable para producción, modo desarrollo tiene sentido */