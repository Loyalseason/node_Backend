const express = require('express');

const app = express();

const Port = 5000;
const friendsController = require('./controllers/messages.controllers')

const friends = [
    {
        id : 1,
        name: 'Stephanie',
        age : 21
    }, 

    {
        id : 2,
        name: 'Baaba',
        age : 22
    },

    {
        id : 3,
        name: 'Mark',
        age : 23
    },

    {
        id: 4,
        name: 'Emmanuel',
        age : 25
    }
]

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.url} ${delta}ms `)
})

app.use(express.json());

app.post('/friends', (req, res)=> {
    if (!req.body.name){
       return res.status(400).json({error : "Missing Friend Name"})
    }
        const newFriend = {
            id : friends.length,
            name : req.body.name,
            age : req.body.age,
        }
        friends.push(newFriend)
        res.json(newFriend)
    
    
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/friends/:id', (req, res) =>{
   const friendId = Number(req.params.id);
   const friend = friends[friendId];
   if(friend){
    res.status(200).json(friend)
   }else{
    res.status(404).json({
        error: 'Friend Does Not exist'
    });
   }
})

app.get('/messages', friendsController.getMessages)

app.post('/messages', friendsController.postMessages )
 
app.listen(Port, (err) => {
    if(!err){
        console.log(`Listening on ${Port}`);
    }
    else{
        console.log(err)
    }
})

