import * as types from "./ActionTypes";

//SlideShow
export const GetGROOMSlideShowRequest = () => (dispatch) => {
  dispatch({
    type: types.GET_SLIDESHOW_REQUEST,
  });
};

export const GetGROOMSlideShowSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_SLIDESHOW_SUCCESS,
    payload,
  });
};

export const GetSearchRemove = () => (dispatch) => {
  dispatch({
    type: types.GET_SEARCH_REMOVE,
  });
};

export const GetfoodlideShowSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_Food_SLIDESHOW_SUCCESS,
    payload,
  });
};

export const PostUserSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_User_SUCCESS,
    payload,
  });
};

export const GetGROOMSlideShowFailure = () => (dispatch) => {
  dispatch({
    type: types.GET_SLIDESHOW_FAILURE,
  });
};

//product

export const GetProductRequest = () => (dispatch) => {
  dispatch({
    type: types.GET_Product_REQUEST,
  });
};

export const GetProductcatSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_Product_cat_SUCCESS,
    payload,
  });
};

export const GetProductdogSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_Product_dog_SUCCESS,
    payload,
  });
};

export const GetProductbirdSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_Product_bird_SUCCESS,
    payload,
  });
};

export const GetSearchSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_SEARCH_SUCCESS,
    payload,
  });
};

export const GetProductrabbitSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_Product_rabbit_SUCCESS,
    payload,
  });
};

export const GetProductFailure = () => (dispatch) => {
  dispatch({
    type: types.GET_Product_FAILURE,
  });
};

export const GetSingleSuccess = (payload) => (dispatch) => {
  dispatch({
    type: types.GET_SINGLEPAGE_SUCCESS,
    payload,
  });
};
const AddToCart = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, payload: payload });
};
let DeleteFromCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_FROM_CART, payload: id });
};
let ResetCart = () => (dispatch) => {
  dispatch({ type: types.RESET_CART });
};
let AddCartitems = (id) => (dispatch) => {
  dispatch({ type: types.ADD_CART_ITEMS, payload: id });
};
let ReduceCartItems = (id) => (dispatch) => {
  dispatch({ type: types.REDUCE_CART_ITEMS, payload: id });
};

let ApplyCouponFn = () => (dispatch) => {
  dispatch({ type: types.APPLY_COUPON });
};

export {
  AddToCart,
  DeleteFromCart,
  ResetCart,
  ReduceCartItems,
  AddCartitems,
  ApplyCouponFn,
};
