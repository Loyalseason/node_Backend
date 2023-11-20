const express = require('express');

const messageRoutes = express.Router();
const messagesController = require('../controllers/messages.controllers')

messageRoutes.get('/', messagesController.getMessages)

messageRoutes.post('/', messagesController.postMessages )



module.exports = messageRoutes;