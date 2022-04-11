import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstant"

const url ="https://5000-kcpele-shopclone1-87jb42veve9.ws-eu39.gitpod.io"
export const addToCart = (id, qty) => async(dispatch, getState) => {
   
    const { data} = await axios.get(`${url}/api/products/${id}`)


    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    })

    //getState() is the initialState in the store that was declered

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

//remove cart
export const removefromcart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })
//getState() is the data in the state
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}