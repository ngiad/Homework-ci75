import '../App.css';
import { useState, useEffect } from 'react';


function Bai1() {
    const [Scroll, getScroll] = useState(0)
    document.addEventListener("scroll", () => {
        getScroll(document.documentElement.scrollTop)
    })
    useEffect(() => {
        document.title = `Scroll ${Scroll}`
    }, [Scroll])
    function handoclick() {
        document.documentElement.scrollTop = 0
    }

    return (
        <div>

            <div className='block-long'>bài 1</div>
            {Scroll > 0 ? <button className='scroll' onClick={handoclick}>Top</button> : null}
        </div>
    );
}


export default Bai1;
