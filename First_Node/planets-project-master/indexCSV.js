const { parse } =  require('csv-parse');
const fs = require('fs')


function isHabitable(planet){
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 
    && planet['koi_prad'] < 1.6;
}


const result = [];
 fs.createReadStream('keplers_Data.csv')
    .pipe(parse({
    comment : '#',
    columns : true,
}))
.on('data', (data) => {
    if(isHabitable(data)){
        result.push(data);
    }

})
.on('error', (err) => {
    console.log(err);
})
.on('end', () => {
    console.log(`the length of our array ${result.length}`);

    console.log('done');
});



