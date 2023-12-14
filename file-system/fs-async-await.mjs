import { readFile } from 'node:fs/promises'
/* Recuerda que al import no es necesario el objeto fs ya que solo importamos la funcion readFile */
/* Asincrono secuencial */
/* Leer archivo con async/await */
/* Es necesario tranformar a .mjs ya que este funciona asincronico */
console.log('Leyendo archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('Primer texto: ', text)


console.log('Hacer otras tareas mientras lee el archivo...')


console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./archivo-dos.txt', 'utf-8')
console.log('Segundo texto: ', secondText)