const fs = require('node:fs/promises') /* Dependencia de produccion */
const path = require('node:path') /* Dependencia de produccion */
const pc = require('picocolors') /* Dependencia de produccion */

/* Dependencia de desarrollo, no es neecesaria para que el programa funcione, no sirve de nada instalar cosas que no son estrictamente necesarias */

const folder = process.argv[2] || '.' /* <-- Si no se pasa argumento, se toma el directorio actual */

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)

    } catch {
        console.error(pc.red(`Error al leer el directorio, ${folder} `))
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats 

        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(pc.red(`Error al leer el archivo, ${filePath} `))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory() 
        const fileType = isDirectory ? 'DIR' : 'FILE'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.white(fileType)}\t${pc.blue(fileSize.toString())}\t${pc.bgYellow(fileModified)}\t${pc.bgCyan(file)}`
    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)