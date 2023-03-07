import React, { useEffect, useState } from "react";

import Recipe from "./components/Recipe";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./UI/Input";

import classes from "./App.module.css";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [completeRequest, setCompleteRequest] = useState("");
    const [hasError, setHasError] = useState(false);

    // Only 10 request per minutes are allowed by this API
    // 'search' variable is used also to avoid the limit of 10 request
    // by collecting all the 'input value' then use it as value for completeRequest

    useEffect(() => {
        const showRecipe = async () => {
            setHasError(false);
            try {
                const response = await fetch(
                    `https://api.edamam.com/api/recipes/v2?type=public&q=${completeRequest}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
                );
                const data = await response.json();
                setRecipes(data.hits);
            } catch (error) {
                setHasError(true);
            }
        };
        showRecipe();
    }, [completeRequest]);

    const inputHandler = (event) => {
        setSearch(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setCompleteRequest(search);
        setSearch("");
    };

    return (
        <div className={classes.foody}>
            {!completeRequest ? <h1>What do you fancy today? </h1> : <h1>Enjoy!</h1>}

            {hasError && <h1>Something went wrong!</h1>}
            <form className={classes.search_form} onSubmit={submitHandler}>
                <Input type="text" onChange={inputHandler} placeholder="Search Recipe" />
                <Button type="submit">
                    <b>Discover</b>
                </Button>
            </form>

            <div className={classes.recipe_wrap}>
                {recipes.map((recipe) => (
                    <Card className={classes.card_recipe}>
                        <Recipe
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            type={recipe.recipe.mealType}
                            dishType={recipe.recipe.dishType}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
