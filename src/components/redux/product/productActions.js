import axios from "axios"
import { FETCH_ERROR, FETCH_PRODUCTS, FETCH_SUCCESS } from "./productType"

const fetchProducts = () => {
 return {
    type: FETCH_PRODUCTS,
 }
}

const fetchError = (errMsg) => {
    return {
        type: FETCH_ERROR,
        payload: errMsg
    }
}

const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

export const fetchProduct = async () => {
    // fetchProducts()

    axios("https://fakestoreapi.com/products")
        .then( response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

