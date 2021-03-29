import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

import classes from './Burger.module.css'
const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=>
            <BurgerIngredient key= {igKey+i} type={igKey}/>
        )
    })
    return(
        <div className={classes.Burger}>
            {transformedIngredients}
        </div>
    );
}

export default burger;