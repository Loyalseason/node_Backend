fetch('http://api.github.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
   console.log(data)
}) 