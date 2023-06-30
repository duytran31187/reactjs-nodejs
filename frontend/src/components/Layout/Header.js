import classes from './Header.module.css'
import React, { Fragment } from 'react'
import mealImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                <section className={classes['header-meals']}>
                    <h1>React Meal</h1>
                    <HeaderCardButton onShowCart={this.props.onShowCart}/>
                </section>
                <div className={classes['main-image']}>
                    <img src={mealImage} alt='A table with full of foods' />
                </div>
            </Fragment>
      )
    }
}

// const Header = (props) => {
//   return (
//         <Fragment>
//             <section className={classes['header-meals']}>
//                 <h1>React Meal</h1>
//                 <HeaderCardButton onShowCart={props.onShowCart}/>
//             </section>
//             <div className={classes['main-image']}>
//                 <img src={mealImage} alt='A table with full of foods' />
//             </div>
//         </Fragment>
//   )
// }
export default Header
