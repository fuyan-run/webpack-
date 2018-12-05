const path = require('path');


console.log(1, path.resolve('/asd1', './shelljs.js'))
console.log(2, path.resolve('/asd2', '/asd3', 'shelljs.js'))
console.log(3, path.resolve('/asd3', './shelljs.js', '../'))
console.log(4, path.resolve('./asd3', './shelljs.js', './'))
console.log(5, path.resolve('/asd1', 'shelljs.js'))
console.log(6, path.resolve('asd1', 'shelljs.js'))
console.log(7, path.resolve('asd1', '/a', 'shelljs.js'))

console.log('--------------------------------------------------')

console.log(11, path.join('/asd1', './shelljs.js'))
console.log(12, path.join('/asd2', '/asd3', 'shelljs.js'))
console.log(13, path.join('/asd3', './shelljs.js', '../'))
console.log(14, path.join('./asd3', './shelljs.js', './'))
console.log(15, path.join('/asd1', 'shelljs.js'))
console.log(16, path.join('asd1', 'shelljs.js'))
console.log(17, path.join('asd1', '/a', 'shelljs.js'))
console.log(18, path.join('asd1', './a', 'shelljs.js'))
console.log(19, path.join('asd1', '../a', 'shelljs.js'))
console.log(20, path.join('asd1', '../a', './shelljs.js'))
console.log(21, path.join('asd1', '../a', '../shelljs'))
console.log(22, path.join('asd1', '../a', '../shelljs', '../../sd'))
console.log(23, path.join('../../..asd1', '../shelljs','../a',  '/sdsd'))