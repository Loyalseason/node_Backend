const axios = require('axios')

axios.get('https://nodejs.org/en/')
.then((res) => {
    console.log(res);
})