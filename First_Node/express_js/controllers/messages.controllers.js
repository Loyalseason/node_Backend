const path = require('path');



function postMessages(req, res) {
    res.send("Updating message ...")
}

function getMessages(req, res) {
     const filePath = path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg');
     res.sendFile(filePath)

  
    // res.send('<ul><li>Hello Shantel</li></u>')
}

module.exports = {
    postMessages,
    getMessages,
}

