const fs = require ('node:fs/promises')
const path = require('node:path')   

const folder = process.argv[2] || '.' /* <-- Si no se pasa argumento, se toma el directorio actual */   

async function ls(folder) {
    let files
}