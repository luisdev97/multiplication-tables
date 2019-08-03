const fs = require('fs');




const listar = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base*i}`);
}





//module.exports.crearArchivo = base => {}
const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, error => {
            if (error) reject(error);
            else resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}