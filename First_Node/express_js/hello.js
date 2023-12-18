const express = require('express');
const cluster = require('cluster');
const   os    = require('os')
const app = express()
const port = 3000;

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
         
    }

}
 
app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`)
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding ding ding ${process.pid}`)
});


if(cluster.isMaster)
{
    console.log('Master has been started...');
    const Num_Workers = os.cpus().length;

    for(let i = 0; i < Num_Workers; i++){
        cluster.fork();
    }


}else{
    console.log('Worker process started');
    app.listen(port)
} 
