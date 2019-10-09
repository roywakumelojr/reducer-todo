import React, { useReducer } from 'react';
import { todoReducer, todo } from '../reducers/todoReducer'
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [state, dispatch] = useReducer (todoReducer, todo)
    return (

        <div>
            <TodoForm dispatch = {dispatch} />
            {state.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}

export default TodoList;