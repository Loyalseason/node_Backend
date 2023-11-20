
function postMessages(req, res) {
    res.send("Updating message ...")
}

function getMessages(req, res) {
    res.send('<ul><li>Hello Shantel</li></u>')
}

module.exports = {
    postMessages,
    getMessages,
}