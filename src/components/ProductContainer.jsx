import React, { useEffect } from 'react'
import { fetchProduct } from './redux/product/productActions'
import { useDispatch, useSelector } from 'react-redux'

function ProductContainer() {
    const productData =  useSelector(state => state.productsReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])
  return (
    <div className='container'>
        ProductContainer
        <div className='grid-cols'>
            {
            productData.products.map(product => {
                return <div className='flex-col border' key={product.id}>
                    <div className='img-container'>
                        <img src={product.image} alt={product.title} className='prod-img' />
                    </div>
                    <h1 className='text'>{product.title}</h1>
                    <span>#{product.price}</span>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default ProductContainer