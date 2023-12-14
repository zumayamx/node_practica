const os = require('node:os')

console.log('Información del sistema opetativo: ')
console.log('---------------------------------')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Memoria total: ', os.totalmem(), 'bytes')
console.log('Memoria libre: ', os.freemem(), 'bytes')
console.log('Arquitectura del sistema: ', os.arch())

console.log('CPUs: ', os.cpus()) /* Información de los procesadores para escalar programas en node */
console.log('Uptime: ', os.uptime() / 60 / 60) /* Tiempo que lleva encendido el sistema operativo */