const express = require('express');

const app = express();

const Port = 5000;


const friendRoutes = require('./routes/friends.router')
const messageRoutes = require('./routes//messages.routes')

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.url} ${delta}ms `)
})

app.use(express.json());

app.use('/friends', friendRoutes)
app.use('/messages', messageRoutes)

app.listen(Port, (err) => {
    if(!err){
        console.log(`Listening on ${Port}`);
    }
    else{
        console.log(err)
    }
})

