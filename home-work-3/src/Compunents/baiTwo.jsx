import React from 'react'
import { useState } from 'react';
const baiTwoColor = ["red", "yellow", "green", "white", "black", "blue", "pink"]
const BaiTwo = () => {

    const [baiTwoState, setTwostate] = useState(0)

    function ClickOn() {
        setTwostate(baiTwoState === 6 ? 0 : baiTwoState + 1)
    }
    return (
        <>
            {
                baiTwoColor.map((item, index) => {
                    return <div key={index} className={`baiTwo ${index === baiTwoState && item}`}>
                    </div>
                })
            }
            <button onClick={ClickOn}>thay doi mau</button>
        </>
    )
}

export default BaiTwo