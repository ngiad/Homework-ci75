import React from 'react'


const User = () => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => { sessionStorage.setItem("data", JSON.stringify(data)) })
    const Data_User = JSON.parse(sessionStorage.getItem("data"))
    return (
        <>
            {
                Data_User.map((item, index) => {
                    return (
                        <div className='contener' key={index}>
                            <div className='content-top'>
                                <img src={item.image} alt="avt" />
                            </div>
                            <div className='content-bottom'>
                                <p>Name : {item.title}</p>
                                <p>Category : {item.category}</p>
                                <p>Description  : {item.description}</p>
                                <p>Price : {item.price}$</p>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    )
}

export default User
