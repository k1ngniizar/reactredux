import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './redux/burger/burgerActions'
import { ORDER_BURGER } from './redux/burger/burgerOrderTypes'
import { ORDER_PIZZA } from './redux/pizza/PizzaTypes'
import { orderPizza } from './redux/pizza/PizzaActions'

function CustomerChoice() {
  const [orderMeal, setOrderMeal] = useState("")
  const [mealQty, setMealQty] = useState(0)
  const {PizzaReducer, burgerReducer} = useSelector(state => state)
  const dispatch = useDispatch()

  const handleOrderMeal = ()=>{
    if (!mealQty || !orderMeal) {
      alert("Please select a meal and a quantity you choose to order")
      return;
    }

    if(orderMeal === ORDER_BURGER){
      dispatch(orderBurger(mealQty))
    }

    if(orderMeal === ORDER_PIZZA) {
      dispatch(orderPizza(mealQty))
    }

  }
  return (
    <>
    <div className='container'>
      <h1 className='text'>Store</h1>
      <p className='store-info'>Number of Burger available <span>{burgerReducer.burgerBase}</span></p>
      <p className='store-info'>Number of Pizza available <span>{PizzaReducer.pizzaBase}</span></p>
    </div>
    <section className='container'>
      <h1 className='text'>Order a meal</h1>
      <div className='flex-col'>
        <select value={orderMeal} onChange={(e)=> setOrderMeal(e.currentTarget.value)} className='order-input' name="select-meal" id="select-meal">
          <option value="">Select a meal</option>
          <option value="ORDER_BURGER">Burger</option>
          <option value="ORDER_PIZZA">Pizza</option>
        </select>
        <div className='flex-col'>
          <label htmlFor="order-qty">Quantity</label>
          <input onChange={e => setMealQty(parseInt(e.currentTarget.value))} type="number" id="order-qty" className='order-input' placeholder="what is your order quantity" />
        </div>
      </div>
      <button onClick={handleOrderMeal} className='btn'>Order meal</button>
    </section>
     
    </>
  )
}

export default CustomerChoice