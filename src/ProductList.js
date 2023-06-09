import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/style.css'
import moment from 'moment'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products')
                setProducts(response.data)
            } catch (error) {
                console.error('Error: ', error)
            }
        }

        fetchData()
    }, [])

    const formattedDate = moment(products.created_at).format('DD MMMM YYYY')


    return (
        <div className='container'>
            <h1>ProductList</h1>
            {products.map((product) => (
                <div>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>Price: Rp.{product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Created at: {formattedDate}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
