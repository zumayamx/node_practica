
 /* import os from 'node:os'  <--- mas generico recuerda agregar objeto en cada llamada de función, ex os.platform */

/* tambien puedes utilizar */
import { platform, release, totalmem, freemem, arch, cpus, uptime } from 'node:os' 

console.log('Información del sistema opetativo: ')
console.log('---------------------------------')

console.log('Nombre del sistema operativo: ', platform())
console.log('Versión del sistema operativo: ', release())
console.log('Memoria total: ', totalmem(), 'bytes')
console.log('Memoria libre: ', freemem(), 'bytes')
console.log('Arquitectura del sistema: ', arch())

console.log('CPUs: ', cpus()) /* Información de los procesadores para escalar programas en node */
console.log('Uptime: ', uptime() / 60 / 60) /* Tiempo que lleva encendido el sistema operativo */

