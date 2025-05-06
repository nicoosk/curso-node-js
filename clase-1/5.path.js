const path = require('node:path')

// Barra separadora de carpetas según os
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/temp/secret-file/secret.txt')
console.log(base)

const fileName = path.basename('/temp/secret-file/secret.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.jpg')
console.log(extension)