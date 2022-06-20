import React from 'react'

const Contener = (props) => {
    return (
        <div className='contener'>
            <div className='content-left'>
                <h4 className='h4'>{props.h4}</h4>
                <p className='p'>{props.p}</p>
            </div>
            <div className='content-right'>
                <h4 className='h4right'>{props.h4right}</h4>
                <p className='pright'>{props.pright}</p>
            </div>
        </div>
    )
}

export default Contener