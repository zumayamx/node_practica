const fs = require('node:fs/promises')

const folder = process.argv[2] || '.' /* <-- Si no se pasa argumento, se toma el directorio actual */
/*Correr deste terminal ->  node ./file-system/ls-advanced.js ./cjs */

fs.readdir(folder)
.then (files => {
    files.forEach(file => {
        console.log(file)
    })
})
.catch(err => {
    console.log('Error al leer el directorio, ', err)
    return;
})


