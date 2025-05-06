const fs = require('node:fs');
// const { promisify } = require('node:util');
// const readFile = promisify(fs.readFile);

console.log('Leyendo archivo...');

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Primer texto: ', text)
})

console.log('Haciendo cosas mientras se lee el archivo...')

console.log('Leyendo segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto ', text)

})

