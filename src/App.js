import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
//import uuidv4 from 'uuid/v4'; -> id prevtodos = uuid/v4(  )

  function App() {
    
    const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: true }])
    const todoNameRef = useRef()

    function handleAddTodo(e) {
      const name = todoNameRef.current.value
        if (name === "") 
        return 
          console.log(name)
          setTodos(prevTodos => {
          return [...prevTodos, {id: 1, name: name, complete: false }]
      })
      todoNameRef.current.value = null
    }

    return (  
    <>

    <div id='todoInput'>
      
      <h2>To-Do's!! </h2>
      <div> <input ref={todoNameRef} type='text' /></div>

      <br></br>
      
      <button onClick={handleAddTodo} >Add a to-do</button>
 
      <br></br><br></br>

      <div class='test'> <TodoList  todos = {todos}/></div>

      <br></br> 

      <div>0 left to do</div>
      
      <button>Clear complete todos</button>

    </div>
    
    </>

    ) 
  }  
export default App;
  