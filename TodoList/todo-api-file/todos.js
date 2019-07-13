const express= require('express')
const route = express.Router()

let todos = []
const fs = require('fs')

    fs.readFile('output.txt' , 'utf-8' , function callback (err,data){
        if(err) throw err;
        if(data){
        todos = JSON.parse(data.toString())
        }
        })


route.get('/', (req,res)=> {
    res.send(todos)
})

route.post('/',(req,res) =>{
    const {title , striked = false} = req.body     //what does striked=false does here?, default value is initialised as false even without doing striked = false here.
     let newTodos = {
         id : todos.length + 1,
         title : title,
         striked : striked =="true"    //how does =="true" makes all values boolean?
     }
     todos.push(newTodos);
     res.send(newTodos)
     writeTodo(todos)
})

route.patch('/:id' , (req,res) => {
    let todoToChange = todos.find(todos=>todos.id == req.params.id)
    todoToChange.title =req.body.title;
    todoToChange.striked = !todoToChange.striked;
    writeTodo(todos)
    res.sendStatus(200)
})

route.delete('/:id' , (req,res) => {
    let todoToDelete = todos.find(todo => todo.id == req.params.id)
    if(!todoToDelete.striked){
      return  res.sendStatus(404)
    }

    function alpha(todos,index){
        todos.id = index+1
        return todos
    }

    todos = todos.filter(todos => todos.id != todoToDelete.id)
    .map(alpha)
    
    writeTodo(todos)
    res.sendStatus(200)
})



function writeTodo(todos){
    const content = JSON.stringify(todos);
    fs.writeFile('output.txt' , content , function callback (err , result){
        if(err) throw err;
        else console.log("Successfully written");
    })
}

module.exports = route