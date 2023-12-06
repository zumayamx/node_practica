const fs = require('node:fs/promises')

/*Leer archivo de forma asincrona */
console.log('Leyendo archivo...')
fs.readFile('./archivo.txt', 'utf-8')
.then(text => { /* Cuando tenga el archivo leido, regresalo */
    console.log('Primer texto: ', text)
})

console.log('Hacer otras tareas mientras lee el archivo...')

/* Ahora ejecuta el programa con promesas, no callback */
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo-dos.txt', 'utf-8')
.then(text => { 
    console.log('Segundo texto: ', text)
})

/* Modulos nativos que no tengan promesas nativas, usa esto: */

/* const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile) */

/* Cambia el fs.readFile por fs.readFilePromise, o cualquier otro nombre  */