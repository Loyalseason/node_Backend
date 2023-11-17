const fs = require('fs')

const fileName = './Test/example.txt';
const fileContent = 'Emmanuel\nMicheal'
const newFileName = './Test/file.txt'

const newDirectory = './Test'

fs.mkdir(newDirectory, (err) => {
   if(err){
     console.log('File Already Exist')
    }
    else{
        console.log('Directory Created Successfully')
    }
})

fs.writeFile(fileName, fileContent,  (err) =>{
    if(err){
        console.log(err)
       }
       else{
           console.log('File Created Successfully')
       }
})

fs.rename(fileName, newFileName, (err) => {
    if(err){
        console.log(err)
       }
       else{
           console.log('File Renamed Successfully')
       }
})

setTimeout(() => {
    fs.appendFile(newFileName, '\nEmmanuel Asante', (err) => {
        if(err){
            console.log(err)
           }
           else{
               console.log('Content added Successfully')
           }
    })
}, 1000)
