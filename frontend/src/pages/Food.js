import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";

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
            <Fragment>
                {this.state.cartIsShown && <Cart onClose={this.hideCartHandler}/>}
                <Header onShowCart={this.showCartHandler}/>
                
                <main>
                    <Meals />
                </main>
            </Fragment>
        )
    }
}
export default FoodPage;