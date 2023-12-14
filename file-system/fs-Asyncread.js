const fs = require('node:fs')

/* Asincrono con call backs */

/*Leer archivo de forma asincrona */
console.log('Leyendo archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { /* <-- Lee el archivo y espera a ejecutar el callback */
    console.log('Primer texto: ', text)
}) 

console.log('Hacer otras tareas mientras lee el archivo...')

/* Ahora ejecuta el programa sin necesidad de tener los archivos leidos, solo hasta que sean llamados, haciendo
las tareas asincronas */
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo-dos.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto: ', text)
})



