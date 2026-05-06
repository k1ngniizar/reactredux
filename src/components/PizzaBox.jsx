import { orderPizza } from "./redux/pizza/PizzaActions"
import { connect } from "react-redux"

function PizzaBox({pizzaBase, orderPizza}) {
  console.log({pizzaBase, orderPizza})
  return (
    <div className='container'>
      <h2 className='text'>Number of Pizza Base available - {pizzaBase}</h2>
      <button onClick={orderPizza} className='btn'>Order Pizza</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.PizzaReducer.pizzaBase
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
orderPizza: ()=> dispatch(orderPizza())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);