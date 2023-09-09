import React, { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const App = () => {
  const [data, setData] = useState([
    {
      id:1,
      title:"This is title 1",
      description:'This is the description..'
    }
  ])


  // adding new todo
  const addTodo = (todo) =>{
    // const todo = {
    //   id:2,
    //   title:'This is title 2',
    //   description:'This description 2'
    // }
    setData([...data, todo])
  }


  //deleting existing todo
  const deleteTodo = (id) =>{
    setData(data.filter(
      (e) =>e.id !== id
    ))
  }
  return (
<>
<div>
<h1 style={{textAlign:'center'}}>Todo_List_App</h1>
<AddTodo  addTodo={addTodo} />
<Todos data={data} deleteTodo={deleteTodo} />


</div>
</> 
  )
}

export default App