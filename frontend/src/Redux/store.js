import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./Reducers/ProductReducers";

//comp=bining reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetial: productDetailReducer,
});

const initialState = {};

const middleware = [thunk];

///createing store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
