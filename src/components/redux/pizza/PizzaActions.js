import { ORDER_PIZZA } from "./PizzaTypes"

export const orderPizza = (orderQty = 1)=>{
  return {
    type: ORDER_PIZZA,
    payload: orderQty
  }
}