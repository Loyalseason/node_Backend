
const friendsModel = require('../models/friends.model')

function postFriend (req, res) {
    if (!req.body.name){
       return res.status(400).json({error : "Missing Friend Name"})
    }
        const newFriend = {
            id : friendsModel.length,
            name : req.body.name,
            age : req.body.age,
        }
        friendsModel.push(newFriend)
        res.json(newFriend)    
}

function getFriend(req, res) {
    res.json(friendsModel)
}

function searchFriend(req, res){
    const friendId = Number(req.params.id);
    const friend = friendsModel[friendId];
    if(friend){
     res.status(200).json(friend)
    }else{
     res.status(404).json({
         error: 'Friend Does Not exist'
     });
    }
 }

module.exports = {
    postFriend,
    getFriend,
    searchFriend,
}