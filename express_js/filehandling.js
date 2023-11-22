const express = require('express');

const app = express();
const fs = require('fs');
const port = 3000;


// fs.mkdir('files', (err) => {
//     if(err){
//         console.log('File Already Exist', err);
//     }else{
//         console.log('Successful')
//     }
// })

app.use(express.json())

app.get('/files', (req, res) => {
   
    fs.readdir('files', (err, file) => {
        if(err){
            console.log(err)
        }else{
            let found = false;
            let fileHere = '';
           file.forEach((element, index) => {
             const filenameExt  = element.substring(element.indexOf('.'))
                if(filenameExt === '.js'){
                    found = true;
                    fileHere = element
                    return  fileHere;
                } 
           })
           if(found === true){
            return console.log('found a txt file\n',fileHere)
           }else{
            return console.log('txt file not found')
           }
        }
    })
   
})

app.post('/files', (req, res) => {
    fs.writeFile()
})

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Listening on ${port}`)
    }
})
