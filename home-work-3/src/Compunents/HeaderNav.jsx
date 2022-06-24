import React from 'react'

const HeaderNav = () => {
    const Name_menu = ["Home", "Recipes", "Article", "Contact", "Purchase"]
    return (
        <div className='NavTop'>
            <div className='logo'>FASHION</div>
            <div className='menu'>
                {
                    Name_menu.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </div>
        </div>
    )
}

export default HeaderNav