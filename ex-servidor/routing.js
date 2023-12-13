const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req 

    switch (method) {
        case 'GET':
            switch(url) {
            case '/pokemon/ditto':
                res.setHeader('Content-Type', 'aplication/json; charset=utf-8')
                return res.end(JSON.stringify(dittoJSON))
            default:
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                return res.end('<h1>Página no encontrada<h1>')
            }
        
        case 'POST':
            switch(url) {
                case '/pokemon': { /* No olvidar llaves para dos variables en un mismo switch */
                    let body = ''
                    /* Leer la información que llega (escuchar el evento data) */
                    req.on('data', chunk => {
                        body += chunk.toString() /* Ir concatenando la información que llega */
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body)
                        /* Procesar la información (llamar base de datos) */
                        res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'})
                        data.timestamp = Date.now()
                        res.end(JSON.stringify(data))
                    })
                    
                    break
                }
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    return res.end('404 Not found')
            }
        }
    }

const server = http.createServer(processRequest)

server.listen(3000, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})

