import React from 'react'
import classes from "./AvailableMeals.module.css"

import DUMMY_MEALS from "../../dummy-meals"
import MealItem from './MealItem/MealItem'

import Card from "../UI/Card/Card"

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
