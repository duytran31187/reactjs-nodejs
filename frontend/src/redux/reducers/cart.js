import { ADD_CART_TO_ITEM, REMOVE_CART_FROM_ITEM } from "../actions/cartActionTypes";

const INIT_CART = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state = INIT_CART, action) => {
    switch (action.type) {
        case ADD_CART_TO_ITEM: {
            const updatedTotalAmount = state.totalAmount + action.payload.item.price * action.payload.item.amount;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
    
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload.item);
            }
            
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }
        }
            
        case REMOVE_CART_FROM_ITEM:
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload.id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }
        default:
            return state;
    }
}
export default cartReducer;