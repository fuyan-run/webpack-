const path = require('path');


console.log(1, __dirname)
console.log(2, path.resolve(__dirname, '..'))
console.log(3, path.resolve(__dirname, '../../'))

console.log("----------+++++++++++++-------------")
console.log("----------+++++++++++++-------------")

console.log(11, path.join(__dirname, '..'))
console.log(12, path.join(path.resolve(__dirname, '../../'), 'hah'))