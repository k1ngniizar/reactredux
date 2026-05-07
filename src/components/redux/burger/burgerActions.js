import { ORDER_BURGER, RETURN_BURGER } from "./burgerOrderTypes"

export const orderBurger = (orderQty = 1) => {
  return {
    type: ORDER_BURGER,
    payload: orderQty
  }
}

export const returnBurger = (orderQty = 1) => {
  return {
    type: RETURN_BURGER,
    payload: orderQty
  }
}