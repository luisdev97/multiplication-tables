//Requireds
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs').argv;



let comando = argv._[0];


switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado: `.green + archivo.green.bold) })
            .catch(error => { console.log(error) });
        break;
    default:
        console.log('Comando desconocido'.red);
        break;
}