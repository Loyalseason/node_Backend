const { parse } = require('csv-parse')
const fs = require('fs')
const result = [];

const csvConverted = parse({
     columns : true,
})

fs.createReadStream('industry_sic.csv')
.pipe(csvConverted)
.on('data', (data) => {
     result.push(data)
})
.on('error', (err) => {
    console.log(err)
})
.on('end', () => {
    console.log(result)
})
