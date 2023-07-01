import {ADD_CART_TO_ITEM, REMOVE_CART_FROM_ITEM} from "./cartActionTypes";

// const ADD_CART_TO_ITEM = (item)  => {
//     dispatch({
//         type: 'ADD_CART_TO_ITEM',
//         payload: item
//     })
// }

export const addItemToCart = payload => ({
    type: ADD_CART_TO_ITEM,
    payload: payload
});

export const removeItemFromCart = payload => ({
    type: REMOVE_CART_FROM_ITEM,
    payload: payload
});