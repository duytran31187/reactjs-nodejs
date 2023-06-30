import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../Layout/UI/Card'
import MealItem from './MealItem/MealItem'

class AvailableMeals extends React.Component {
  loadingTimer = null;

  constructor () {
    super()
    this.state = {
      meals: [],
      isLoading: true,
      httpError: ''
    }
  }

  async fetchMeals () {
    const response = await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')

    if (!response.ok) {
      throw new Error('something wrong with service')
    }

    const responseData = await response.json()

    const loadedMeals = []

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })
    }
    this.setState({
      meals: loadedMeals
    })
  }

  componentDidMount () { // componentDidMount: called once component mounted (was evaluated & rendered)
    console.log('componentDidMount');
    this.getMeals();
  }
  componentDidUpdate(prevProps, prevState) { // componentDidUpdate: called once component updated (was evaluated & rendered)
   /**
     * note
     * componentDidUpdate will be automatically triggered by react everytime component revaluated
     * if just want fetchMeals triggered only when one of depencyChange. let wrap with if (prevState.meals !== this.state.meals)
     */
    console.log('componentDidUpdate') 
  }
  componentWillUnmount () { // componentWillUnmount: called once component unmounted (removed from DOM)
    console.log('componentWillUnmount');
    clearTimeout(this.loadingTimer)
  }

  getMeals () {
    
    const fetchMeals = async () => {
      const response = await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')

      if (!response.ok) {
        throw new Error('something wrong with service')
      }

      const responseData = await response.json()

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      console.log(`loadedMeals ${JSON.stringify(loadedMeals)}`);
      this.setState({
        meals: loadedMeals
      })
      
      this.loadingTimer = setTimeout(() => { this.setState({
        isLoading: false
      }) }, 500) // setTimeout, just want to see loading effect
    }

    fetchMeals().catch(error => {
      this.setState({
        isLoading: false
      })
      this.setState({
        httpError: error.message
      })
    })
  }

  render () {
    if (this.state.isLoading) {
      return (<p>IS LOADING in AvailableMeals.....</p>)
    }
    if (this.state.httpError) {
      return (
        <section>
          {this.state.httpError}
        </section>
      )
    }
    const mealsList = this.state.meals.map((meal) => <MealItem
      key={meal.id}
      id = {meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />)
    console.log(mealsList);
    return (
        <section className={classes.meals}>
          <Card>
            <ul>
              {mealsList}
            </ul>
          </Card>
        </section>
    )
  }
}

// const AvailableMeals = (props) => {
//   const [meals, setMeals] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [httpError, setHttpError] = useState('')
//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch('https://food-app-react-97e2c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')

//       if (!response.ok) {
//         throw new Error('something wrong with service')
//       }

//       const responseData = await response.json()

//       const loadedMeals = []

//       for (const key in responseData) {
//         loadedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price
//         })
//       }
//       setMeals(loadedMeals)
//       const timer = setTimeout(() => { setIsLoading(false) }, 1000) // setTimeout, just want to see loading effect

//       return () => { // clean up
//         clearTimeout(timer)
//       }
//     }

//     fetchMeals().catch(error => {
//       setIsLoading(false)
//       setHttpError(error.message)
//     })
//   }, [])
//   if (isLoading) {
//     return (<p>IS LOADING in AvailableMeals.....</p>)
//   }
//   if (httpError) {
//     return (
//       <section>
//         {httpError}
//       </section>
//     )
//   }
//   const mealsList = meals.map((meal) => <MealItem
//       key={meal.id}
//       id = {meal.id}
//       meal={meal}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />)
//   return (
//       <section className={classes.meals}>
//         <Card>
//           <ul>
//             {mealsList}
//           </ul>
//         </Card>

//       </section>
//   )
// }

export default AvailableMeals
