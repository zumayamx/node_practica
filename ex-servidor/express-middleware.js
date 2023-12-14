const ditto = require('./pokemon/ditto.json')
const express = require('express')
const app = express()

app.disable('X-Powered-By') /* Deshabilitar cabecera, seguridad */

const PORT = process.env.PORT ?? 3000

/* Se puede filtrar un middleware por ruta o por metodo */
app.use((req, res, next) => { /* Use significa que se va a ejecutar en todas las rutas */
    console.log('Middleware primero')
    /* Trackear a la req a la base de datos */
    /* Validar que el usuario este autenticado */
    if (req.method !== 'POST') return next()
    if (req.headers['content-type'] !== 'application/json') return next() /*Tener cuidado con mayusculas y minusculas */

    /* Solo req POST y que el Content-Type sea application/json */  
    let body = ''
    /* Leer la información que llega (escuchar el evento data) */
    req.on('data', chunk => {
        body += chunk.toString() /* Ir concatenando la información que llega */
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        req.body = data
        next()
    })
})

/* El código anterior se puede con esta simple linea */
// app.use(express.json()) /* Es importante entender */

app.get('/pokemon/ditto', (req, res) => { /* No dejar vacio este campo */
    res.json(ditto)
})

app.post('/pokemon', (req, res) =>{ /* Tener cuidado, primero req y despues res, parametros pos poscición */
    /* req.body podria guardar en base de datos */
    res.status(201).json(req.body)
})

app.use((req, res) => { /* Tratar todas las req con 404 en caso de no encontrar url*/
    res.status(404).send('<h1>Página no encontrada 404<h1>')
}) /* Importante que este al final */

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})

