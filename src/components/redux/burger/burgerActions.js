import { ORDER_BURGER, RETURN_BURGER } from "./burgerOrderTypes"

export const orderBurger = () => {
  return {
    type: ORDER_BURGER
  }
}

export const returnBurger = () => {
  return {
    type: RETURN_BURGER
  }
}