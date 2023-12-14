const ditto = require('./pokemon/ditto.json')
const express = require('express')
const app = express()

app.disable('X-Powered-By') /* Deshabilitar cabecera, seguridad */

const PORT = process.env.PORT ?? 3000

app.get('/pokemon/ditto', (req, res) => { /* No dejar vacio este campo */
    res.json(ditto)
})

app.post('/pokemon', (req, res) =>{ /* Tener cuidado, primero req y despues res */
    let body = ''
    /* Leer la información que llega (escuchar el evento data) */
    req.on('data', chunk => {
        body += chunk.toString() /* Ir concatenando la información que llega */
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        res.status(201).json(data)
    })
})

app.use((req, res) => { /* Tratar todas las req con 404 en caso de no encontrar url*/
    res.status(404).send('<h1>Página no encontrada 404<h1>')
}) /* Importante que este al final */

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})
