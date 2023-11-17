function encrypt(data){
    return 'encrypted data'
}

function send(url, data){
 const encrytedData = encrypt(data);
 console.log(`sending ${encrytedData} to ${url}`);
}

module.exports = {
   send,
}
