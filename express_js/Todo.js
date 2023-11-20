const express = require('express')

const app = express();
const port = 3000;

const todos = [
    {id : 1, task : 'But Groceries', completed : false},
    {id : 2, task : 'Finish Coding assignment', completed : true},
    {id : 3, task : 'Go on Break at 12:30pm', completed : false},
]

app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const timeCompleted = Date.now() - startTime
    console.log(`${req.url}, ${req.method}, Time completed = ${timeCompleted}mms`)
})
app.use(express.json())

app.get('/todos', (req, res)=> {
    res.json(todos)
})



app.post('/todos', (req, res) => {
    if(req.body.task){
        const newTodo = {
            id : todos.length,
            task : req.body.task,
            completed : req.body.completed
        }
        todos.push(newTodo)
        console.log(newTodo)
        res.json(newTodo)
    }else{
        return res.status(400).json({error : "Missing Todo List"})
    }

})

app.get('/todos/:todoId', (req, res) => {
        const id = Number(req.params.todoId)
        const todo = todos[id];
        if(todo){
            res.json(todo)
        }else{
            res.status(404).json({error : 'Todo cannot be found'})
        }
        
})

app.patch('/todos/:todoId', (req, res) => {
    const id = Number(req.params.todoId);
    let todo = todos[id];
    if(todo){
        todo.id = id
        todo.task = req.body.task
        todo.completed = req.body.completed
        res.json(todo);
    }else{
        res.status(404).json({error : "Request Not Found"})
    }

})

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`Listening to ${port}`)
    }
})



