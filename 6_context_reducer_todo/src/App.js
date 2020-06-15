import React, {useReducer} from 'react';
import {Container} from "reactstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css"

import {TodoContext} from './context/TodoContext'
import todoReducer from './context/reducer'
import TodoForm from './Components/TodoForm'


const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, []);
  return(
    <TodoContext.Provider value={todos, dispatch}>
      <Container fluid>
        <h1>ToDo App with Context API</h1>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
