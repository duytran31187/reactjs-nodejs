import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

class Meals extends React.Component {
  render () {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
  }
}

export default Meals
