import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Biryani',
        description: 'Tasty and Fresh with merinated Chicked and potato',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Qorma',
        description: 'Perfectly Merinated Chicked with its suices',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Honey Cake',
        description: 'Soft and perfectly configured in Honey from Muffin',
        price: 49.99,
    },
    {
        id: 'm4',
        name: 'Wrap',
        description: 'Nawabi Wrap from Daddy Grill having grilled and BBQ chicken with fully loaded fries in it',
        price: 18.99,
    }
];
const AvaialbleMeals=()=>{
    const mealList = DUMMY_MEALS.map((meal)=>
    <MealItem
    id ={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />);
  return (
    <section className={classes.meals}>
        <Card>
        <ul>{mealList}</ul>
        </Card>
    </section>
  )
}

export default AvaialbleMeals
