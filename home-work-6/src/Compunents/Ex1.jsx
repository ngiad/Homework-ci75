import '../App.css';
import { useEffect, useState } from 'react';
import Products from './Products';


function Ex1() {
    // const [isLoading, setIsLoading] = useState(false)
    const [error, setErrot] = useState(false)
    const [products, setProducts] = useState(
        null)
    useEffect(() => {
        handleGetData()
        localStorage.setItem('products', products)
    })
    const handleGetData = async () => {
        try {
            // setIsLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            // setIsLoading(false)
        } catch (error) {
            setErrot(true)
        }
        console.log("is error", error)
    }
    if (error) return <h1>Not 4</h1>
    return (
        <div>

            <h1>Home work</h1>
            {products && <div className='products_list'>
                {products.map((item, index) => {
                    return <Products product={item} key={index} />
                })}
            </div>}

        </div>
    );
}



export default Ex1
