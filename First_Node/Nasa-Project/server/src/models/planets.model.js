
const {parse}= require('csv-parse')
const fs = require('fs')
const planets = require('./planets.mongo');
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
        .on('data', async (data) => {
            if (isHabitablePlanet(data)){
               await savePlanet(data)
               // habitablePlanets.push(data);
            }
        })
        .on('error', (err) =>{
            console.log(err);
            rej(err);
        })
        .on('end',  async () => {
            const countPlanetsFound =   ((await getAllPlanets()).length);
            console.log(`${countPlanetsFound} habitable planets found`);
            console.log('done');
            res()
        });
}) 
    
}

async function getAllPlanets(){
    return planets.find({});
}


async function savePlanet(planet){
    try {
        await planets.updateOne({
          kepler_name: planet.kepler_name,
         },{
            kepler_name: planet.kepler_name,
         },
          {
          upsert : true,
         });
    } catch (error) {
        console.error(`Could not save planet ${error}`)
    }
}

module.exports = {
   loadPlanetsData,
   getAllPlanets,
};