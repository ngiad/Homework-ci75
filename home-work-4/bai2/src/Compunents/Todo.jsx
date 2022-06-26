import React from 'react'
import { useState } from 'react';
const Todo = ({ content, check }) => {
    const [Checked, setChecked] = useState(-1)
    const [Onclick, setOnclick] = useState(0)




    const checkedTodo = () => {
        setOnclick(Onclick === true ? false : true)
    }

    const test = () => {
        setChecked(Checked === content.length ? 0 : Checked + 1)
    }

    const cleartodo = () => {
        content.splice(0, content.length)
    }
    return (
        <div className='div-todo'>
            <button className={`Clear_todo ${check === false && "displayNone"} ${check === true && "displayBlock"}`} onClick={cleartodo}>Xóa List Todo</button>
            <span className='btn-done' onClick={checkedTodo}>Hoàn Thành Tất cả</span>
            {
                content.map((item, index) => {
                    return <div className={`span-todo ${Checked === index && "done"} ${Onclick === true ? `done` : false}`} key={index}><button className='checkDone' onClick={test}>Done</button> {item.content}</div>
                })

            }
        </div>
    )
}

export default Todo