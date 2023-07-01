import {ADD_CART_TO_ITEM, REMOVE_CART_FROM_ITEM} from "./cartActionTypes";

export const addItemToCart = payload => ({
    type: ADD_CART_TO_ITEM,
    payload: payload
});

export const removeItemFromCart = payload => ({
    type: REMOVE_CART_FROM_ITEM,
    payload: payload
});