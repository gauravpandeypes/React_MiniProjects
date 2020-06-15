import React, {useState, useContext} from 'react'
import {
    FormGroup,
    Input,
    Button,
    Form, 
    InputGroup,
    InputGroupAddon
} from 'reactstrap'

import {v4} from 'uuid'
import {TodoContext} from '../context/TodoContext' 
import {ADD_TODO} from '../context/action.types'

const TodoForm = () => {
    const [todoString, setTodoString]=useState("");
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="warning"
                        // TODO: onClick
                        >Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm; 