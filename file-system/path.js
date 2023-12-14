const path = require('node:path')

console.log(path.sep) /* Ver separador de rutas segun sistema operativo */

/* Unir rutas con path join */

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)   

const base = path.basename('/tmp/content/secret-files/password.txt') /* Ver el nombre del archivo/fichero */
console.log(base)

const fileName = path.basename('/tmp/content/secret-files/password.txt', '.txt') /* Ver el nombre del archivo/fichero sin la extension */ 
console.log(fileName)

const extensionFile = path.extname('/tmp/content/secret-files/password.txt') /* Ver la extension del archivo/fichero */
console.log(extensionFile)