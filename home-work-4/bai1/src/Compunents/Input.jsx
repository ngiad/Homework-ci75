import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input className={props.name} placeholder={props.placeholer}
                value={props.value} onChange={props.setinput}
            />
        </div>
    )
}

export default Input