import React, {useReducer} from 'react';
import {Container} from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from './context/TodoContext';
import todoReducer from './context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';
import { findAllByDisplayValue } from '@testing-library/react';


const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, []);
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>ToDo App with Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;

// usereducer just like usestate is used for state management

// Reduce functions
// The reduce  method executes a reducer function(that you provide)
// on each element of the Array, resulting in a single output value.

// reduce method takes two parameters 
// first is reducer function, second the intital value
// which reducer can make use of 
// reducer method accepts two parameters again
// reduces them to a single value and returns that value

// useReducer(reducer, initialState)
// newState = reducer(currentState, action)
// useReducer returns a pair of values 
// [newState, dispatch]