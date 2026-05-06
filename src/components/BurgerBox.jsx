import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './redux/burger/burgerActions'

function BurgerBox() {
  const burgerBase = useSelector(({burgerReducer}) => burgerReducer.burgerBase)
  // console.log(burgerBase)
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <h2 className='text'>Number of Burger available - {burgerBase}</h2>
      <button onClick={() => dispatch(orderBurger())} className='btn'>Order Burger</button>
    </div>
  )
}

export default BurgerBox