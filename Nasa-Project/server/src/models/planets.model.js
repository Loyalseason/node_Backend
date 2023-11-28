const {parse}= require('csv-parse')
const fs = require('fs')
const path = require('path')
const habitablePlanets = [];


function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 
    && planet['koi_prad'] < 1.6;
}


function loadPlanetsData(){
   
   return new Promise((res, rej) => {
       fs.createReadStream('././data/kepler_data.csv')
        .pipe(parse({
            comment : '#',
            columns : true,
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data)){
                habitablePlanets.push(data);
            }
        })
        .on('error', (err) =>{
            console.log(err);
            rej(err);
        })
        .on('end', () => {
            console.log(habitablePlanets.map((planet) => {
                return planet['kepler_name'];
            }));
        
            console.log('done');
            res()
        });
}) 
    
}


module.exports = {
   loadPlanetsData,
   planets: habitablePlanets,
};