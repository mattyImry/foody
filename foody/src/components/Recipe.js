import Ingredients from "./Ingredients";

import classes from "./Recipe.module.css";

const Recipe = (props) => {
    const cal = Math.floor(props.calories);

    return (
        <div className={classes.recipe}>
            <h1>{props.title}</h1>
            <h3>
                Ideal for: <span>{props.type}</span>
            </h3>
            <h3>
                Type of Dish: <span>{props.dishType}</span>
            </h3>
            <h3>
                Cousine: <span>{props.cousine}</span>
            </h3>

            <img src={props.image} alt="" />
            <h4>
                {" "}
                Total Calories: <span>{cal} Kcal</span>
            </h4>
            <Ingredients ingredientsText={props.ingredients} />
        </div>
    );
};

export default Recipe;
