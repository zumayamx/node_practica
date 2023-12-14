/* Argumentos del programa */
//console.log(process.argv)

/* Controlar salida del proceso */
//process.exit(0) /* 0 = exito, 1 = error */

/* Controlar eventos del proceso */
//process.on('exit', () => {
    /* Ex limpiar recursos */
//})

/* Current working directory */
console.log(process.cwd()) /* No es donde esta archivo, sino desde donde se ejecuta el proceso */

/* Variables de entorno */
console.log(process.env.USERNAME) /* Ver variable de entorno */ 