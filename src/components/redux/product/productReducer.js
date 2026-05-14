import { FETCH_ERROR, FETCH_PRODUCTS, FETCH_SUCCESS } from "./productType"

const initialState = {
    products: [],
    error: false,
    loading: false
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default productsReducer