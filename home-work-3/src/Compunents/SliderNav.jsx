import React from 'react'

const SliderNav = () => {
    const color = ["red", "yellow", "green"]
    return (
        <>
            {
                color.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </>
    )
}

export default SliderNav