import React from 'react'


const User = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => { sessionStorage.setItem("data", JSON.stringify(data)) })
    const Data_User = JSON.parse(sessionStorage.getItem("data"))
    return (
        <>
            {
                Data_User.map((item, index) => {
                    item.img = "https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"
                    return (
                        <div className='contener' key={index}>
                            <div className='content-top'>
                                <img src={item.img} alt="avt" />
                            </div>
                            <div className='content-bottom'>
                                <p>Name : {item.name}</p>
                                <p>User Name : {item.username}</p>
                                <p>Email : {item.email}</p>
                                <p>Street : {item.address.street}</p>
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
