import React from 'react';

function Todo ({todo, dispatch}) {
    const toggleItems = () => {
        dispatch ({
            type: 'CROSS_ITEMS',
            payload: todo.id
        });
    };
    return (
        <div
        onClick={toggleItems} 
        className={`todo${todo.completed ? 'completed' : ''}`} 
        style={{textDecoration: todo.completed ? 'line-through solid red': ''}}>
        <p className='Items'>{todo.item}</p>
        </div>    
    );
}

export default Todo;