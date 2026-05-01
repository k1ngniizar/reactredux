import { createStore } from "redux";
import PizzaReducer from "./pizza/PizzaReducers";

export const store = createStore(PizzaReducer)