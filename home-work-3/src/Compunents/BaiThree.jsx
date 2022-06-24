import React from 'react'
import { useState } from 'react';
const Bai3 = ["radeus"]
const BaiThree = () => {
    const [baiThreeState, setbaiThreeState] = useState(0)
    function chick_on() {
        setbaiThreeState(baiThreeState === 1 ? 0 : baiThreeState + 1)
    }
    return (
        <>
            {
                Bai3.map((item, index) => {
                    return <div key={index} className={`baiTwo ${index === baiThreeState && item}`}>
                    </div>
                })
            }
            <button onClick={chick_on}>Bất Ngờ chưa</button>
        </>
    )
}

export default BaiThree