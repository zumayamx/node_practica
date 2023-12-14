import { readFile } from 'node:fs/promises'

/* Asincrono paralelo, hacer varias tareas al mismo tiempo */
/* Leer los archivos en paralelo */
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo-dos.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Primer texto: ', text)
    console.log('Segundo texto: ', secondText)
})

