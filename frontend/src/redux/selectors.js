export const mapStateToProps = state => {
    return {
        cart: state.cart,
        items: state.cart.items,
        totalAmount: state.cart.totalAmount
    };
};