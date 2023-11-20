const express = require('express');

const app = express();

const Port = 5000;
const messagesController = require('./controllers/messages.controllers')
const friendsController = require('./controllers/friends.controllers')


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.url} ${delta}ms `)
})

app.use(express.json());

app.post('/friends', friendsController.postFriend)

app.get('/friends', friendsController.getFriend)

app.get('/friends/:id', friendsController.searchFriend)

app.get('/messages', messagesController.getMessages)

app.post('/messages', messagesController.postMessages )
 
app.listen(Port, (err) => {
    if(!err){
        console.log(`Listening on ${Port}`);
    }
    else{
        console.log(err)
    }
})

