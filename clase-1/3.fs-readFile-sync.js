const fs = require('node:fs');
// const { promisify } = require('node:util');
// const readFile = promisify(fs.readFile);

console.log('Leyendo archivo...');

const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Primer texto: ', text)

console.log('Haciendo cosas mientras se lee el archivo...')

console.log('Leyendo segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('Segundo texto: ', secondText)

