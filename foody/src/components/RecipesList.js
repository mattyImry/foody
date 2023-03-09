import Recipe from "./Recipe";
import Card from "../UI/Card";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
    return (
        <div className={classes.recipe_wrap}>
            {props.recipes.map((recipe) => (
                <Card>
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        type={recipe.recipe.mealType}
                        dishType={recipe.recipe.dishType}
                        cousine={recipe.recipe.cuisineType}
                    />
                </Card>
            ))}
        </div>
    );
};

export default RecipesList;
