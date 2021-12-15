
const { type } = require('os');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.base,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'Creado'))
.catch(err => console.log(err));

 
