const http = require('http');

const port = 3000;
const app = http.createServer();

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


app.on('request', (req, res) => {

    const items = req.url.split('/')
    console.log(items)
    if (req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            // console.log(data)
            const friend = data.toString()
            console.log('Request :', friend)
            friends.push(JSON.parse(friend)); 
             })
        req.pipe(res)
    }else if(req.method === 'GET' && items[1] === 'friends'){
        res.writeHead(200, {
            'Content-Type' : 'application/json',
        })  
      if(items.length === 3){
        const friendIndex = Number(items[2])
        res.end(JSON.stringify(friends[friendIndex])) 
      }else{
        res.end(JSON.stringify(friends))
      }
        

    }else if(items[1] === '/messages'){
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write('<html>');
        res.write('<body>');
        res.write('<li>Hello Isaac ! </li>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }

}
)



app.listen(port, (err) => {
   if(!err){
    console.log(`Listening on port ${port}`)
   }else{
    console.log(err)
   }
})




