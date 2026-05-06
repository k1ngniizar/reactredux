import { combineReducers } from "redux";
import PizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/burgerReducers";

const rootReducer = combineReducers({
  PizzaReducer,
  burgerReducer
})

export default rootReducer