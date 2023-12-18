const http = require('http')
const port = 3000;
const data = './sample.json'

const fs = require('fs');

 fs.readFile(data, 'utf8', (err, data) => {
    if(err){
        console.log(err)}
     else{
       return JSON.parse(data)
    }
})


// const app = http.createServer((req, res) =>{
//     res.writeHead(200, {
//         'Content-Type' : 'application/json'
//     });
//     res.end(data, (err) => {
//         if(err){
//             console.log('Could not Find Data')
//         }else{
//             'Found the Data Successfully'
//         }
//     })
// })

// app.listen(port, () => {
//   console.log(`We are listening on port ${port}...`);
// })