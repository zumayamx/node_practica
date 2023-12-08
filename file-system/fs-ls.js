const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if(err) {
        console.log('Error al leer el dorectorio, ', err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })

})

