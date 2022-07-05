import React from 'react'
// import Header from './Header'

const Products = ({ product = { "title": "test", "price": "test", "image": "test" } }) => {
    const { title, price, image } = product
    return (
        <div className='product'>
            <img src={image} alt='product' />
            <p className='name'>{title}</p>
            <p className='price'>price: {price}</p>
        </div>
    )
}

export default Products