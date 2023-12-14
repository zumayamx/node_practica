const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), /* Si es un directoro */
    stats.isDirectory(), /* Si es un fichero */
    stats.isSymbolicLink(), /* Si es un enlace simbolico */
    stats.size,
    stats.atime,
    stats.mtime,
    stats.ctime,
    stats.birthtime
)