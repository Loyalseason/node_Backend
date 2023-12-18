const express = require('express');

const app = express();
const fs = require('fs');
const port = 3000;
const today = new Date();


// fs.mkdir('files', (err) => {
//     if(err){
//         console.log('File Already Exist', err);
//     }else{
//         console.log('Successful')
//     }
// })

const data= [{
    name : 'Kofi',
    age : 26
},
{
    name : 'Abi',
    age : 26
}]

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
                if(filenameExt === '.txt'){
                    found = true;
                    fileHere = element
                    return  fileHere;
                } 
           })
           if(found === true){
            return res.send(fileHere);
           }else{
            return res.send({error : 'txt File not found'})
           }
        }
    })
   
})

app.post('/files', (req, res) => {
    fs.writeFile(`files/${today.getHours()}-${today.getMinutes()}.txt`, JSON.stringify(data), (err) => {
        if(!err){
            // res.send(JSON.parse(data))
            res.send('Successfull created file')
        } else{
            console.log(err);
        }
    })
})

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Listening on ${port}`)
    }
})
