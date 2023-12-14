const fs = require('node:fs')

/* Sincrono */
console.log('Leyendo archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8') /* utf-8 para que no salga en binario, ya que por defecto devuelve buffer */

console.log(text)

console.log('Hacer otras tareas mientras lee el archivo...')

/* No es posible hacer otras tareas mientras se lee el primer texto, ya que especificamos que se lea de forma sincrona */
/*Este es el problema de la sincronia ya que el programa funciona de forma secuencial  */
const secondText = fs.readFileSync('./archivo-dos.txt', 'utf-8') 
console.log(secondText)

