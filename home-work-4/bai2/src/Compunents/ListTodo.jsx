import React from 'react'
import Todo from './Todo'
const ListTodoDiv = ({ content, check }) => {
    return (
        <div>
            <Todo content={content} check={check} />
        </div>
    )
}

export default ListTodoDiv