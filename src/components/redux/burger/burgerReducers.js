import { ORDER_BURGER, RETURN_BURGER } from "./burgerOrderTypes"

const initialState = {
  burgerBase : 600
}

const burgerReducer = (state=initialState, action) => {
  switch(action.type){
    case ORDER_BURGER:
      return {
        ...state,
        burgerBase: state.burgerBase - action.payload
      }
    case RETURN_BURGER:
      return {
        ...state,
        burgerBase: state.burgerBase + action.payload
      }
    default:
      return state;
  }
}

export default burgerReducer