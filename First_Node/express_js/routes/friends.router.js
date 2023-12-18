const express = require('express');

const friendRoutes = express.Router()

const friendsController = require('../controllers/friends.controllers')
 
friendRoutes.use((req, res, next) => {
    console.log(`ip address is ${req.ip}`)
    next();
})
friendRoutes.post('/', friendsController.postFriend)

friendRoutes.get('/', friendsController.getFriend)

friendRoutes.get('/:id', friendsController.searchFriend)

module.exports = friendRoutes;