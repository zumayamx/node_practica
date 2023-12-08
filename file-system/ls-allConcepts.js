const fs = require('node:fs/promises')
const path = require('node:path')   

const folder = process.argv[2] || '.' /* <-- Si no se pasa argumento, se toma el directorio actual */   

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)

    } catch {
        console.error(`Error al leer el directorio, ${folder} `, err)
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats 

        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(`Error al leer el archivo, ${filePath} `, err)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory() 
        const fileType = isDirectory ? 'DIR' : 'FILE'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType}\t${fileSize.toString()}\t${fileModified}\t${file}`
    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}


ls(folder)

