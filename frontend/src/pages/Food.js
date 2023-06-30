import React from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";

class FoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartIsShown: false,
        }
    }
    showCartHandler = () => {
        this.setState({cartIsShown: true})
    }
    hideCartHandler = () => {
        this.setState({cartIsShown: false})
    }
    render() {
        return (
            <CartProvider>
                {this.state.cartIsShown && <Cart onClose={this.hideCartHandler}/>}
                <Header onShowCart={this.showCartHandler}/>
                
                <main>
                    <Meals />
                </main>
            </CartProvider>
        )
    }
}
// const FoodPage = props => {
//     const [cartIsShown, setCartIsShown] = React.useState(false);

//     const showCartHandler = () => {
//         console.log("showCart");
//         setCartIsShown(true);
//     };

//     const hideCartHandler = () => {
//         console.log("hideCartHandler");
//         setCartIsShown(false);
//     };
//     return (
//         <CartProvider>
//             {cartIsShown && <Cart onClose={hideCartHandler}/>}
//             <Header onShowCart={showCartHandler}/>
            
//             <main>
//                 <Meals />
//             </main>
//       </CartProvider>
//     )
// }
export default FoodPage;