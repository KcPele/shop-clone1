import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../Constants/ProductConstants";
const url ="https://5000-kcpele-shopclone1-87jb42veve9.ws-eu39.gitpod.io"
export const listProduct = () => async (dispatch) => {
  try {
    //dispatching request to show loading and we use this to know wether the data has being fetched
    dispatch({ type: PRODUCT_LIST_REQUEST });
    //fetching data
    const { data } = await axios.get(
      `${url}/api/products/`
    );
    //dispatching data and tpye to be handle in reducer
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //error dispatching
    dispatch({
      type: PRODUCT_LIST_FAIL,
      //ternary operato to check if err.response is true then it will check wether to display error.response.data.message or just error.message
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



//single products
export const detailProduct = (id) => async (dispatch) => {
  try {
    //dispatching request to show loading and we use this to know wether the data has being fetched
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    //fetching data
    const { data } = await axios.get(
      `${url}/api/products/${id}`
    );
    //dispatching data and tpye to be handle in reducer
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //error dispatching
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      //ternary operato to check if err.response is true then it will check wether to display error.response.data.message or just error.message
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
