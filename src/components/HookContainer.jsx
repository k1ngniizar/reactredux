import { useDispatch, useSelector } from "react-redux"
import { orderPizza } from "./redux/pizza/PizzaActions"

function HookContainer() {

  const {pizzaBase} = useSelector(state => {
    return state.PizzaReducer
  })

  const dispatch = useDispatch()

  console.log(pizzaBase, dispatch)

  return (
    <div className='container'>
      <h2 className='text'>Number of Pizza Base available - {pizzaBase}</h2>
      <button onClick={()=> dispatch(orderPizza())} className='btn'>Order Pizza</button>
    </div>
  )
}

export default HookContainer