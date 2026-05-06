import { createStore } from "redux";
// import PizzaReducer from "./pizza/PizzaReducers";
// import burgerReducer from "./burger/burgerReducers";
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer)