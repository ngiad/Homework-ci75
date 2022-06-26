import React from 'react'
import { useState } from 'react';

const Todolist = (props) => {
    const [Onclick, setOnclick] = useState(0)
    const checkedTodo = () => {
        setOnclick(true)
    }
    const cleartodo = () => {
        props.todolist.splice(0, props.todolist.length)
    }
    return (
        <div className='div-todo'>
            {/* <span className='btn-done' onClick={checkedTodo}>Hoàn Thành Tất cả</span> */}
            {

                props.todolist.map((item, index) => {
                    return <div onClick={cleartodo} className={`span-todo ${Onclick === true ? `done` : false}`} key={index}>{item.name}</div>
                })
            }
        </div>
    )
}

export default Todolist