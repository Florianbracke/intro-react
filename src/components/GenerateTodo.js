import React from 'react';


export default function GenerateTodo({ todo }) {
    return (
        <div>
            <label>
                {todo.name}
                <input type="checkbox" checked={todo.complete} />
            </label>   
        </div>
    )
}
 