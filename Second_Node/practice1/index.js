const fs = require('fs');

const textIn = fs.readFileSync('./txt/avocado.txt', 'utf-8')

console.log(textIn);