import React, { useState } from 'react';

const TodoForm = ({dispatch}) => {
    const [item, setItem] = useState('');

    const handleChanges = event => {
        setItem(event.target.value)
    };

    const submitForm = event => {
        event.preventDefault ();
        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });
        setItem('');
    };
    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETED'
        });
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input name='todo' onChange={handleChanges} value={item} />
                <button> Add Item </button>
                <button onClick={clearCompleted}> Delete </button>
            </form>
        </div>
    )
};

export default TodoForm;