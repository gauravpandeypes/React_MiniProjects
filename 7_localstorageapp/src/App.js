import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([]);

  // Read from local storage everytime the component is rendered
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage});
    if(localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo]);
  }

  // If any new todo is added then update that in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return(
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}
export default App;

// useEffect
// By using this Hook, you tell React that your component
// needs to do something after render. React will 
// remember the function you passed and call it later
// after performing the DOM updates.