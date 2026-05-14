import { combineReducers } from "redux";
import PizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/burgerReducers";
import productsReducer from "./product/productReducer";

const rootReducer = combineReducers({
  PizzaReducer,
  burgerReducer,
  productsReducer
})

export default rootReducer