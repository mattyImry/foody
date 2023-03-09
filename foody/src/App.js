import React, { useEffect, useState, useCallback } from "react";

import Button from "./UI/Button";
import Input from "./UI/Input";

import classes from "./App.module.css";
import LoadingSpinner from "./UI/LoadingSpinner";
import RecipesList from "./components/RecipesList";

// Only 10 request per minutes are allowed by this API
// 'search' variable is used also to avoid the limit of 10 request
// by collecting all the 'input value' then use it as value for completeRequest

function App() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [completeRequest, setCompleteRequest] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const showRecipe = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://api.edamam.com/api/recipe/v2?type=public&q=${completeRequest}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
            );

            if (!response.ok) {
                throw new Error("Ops an error has occured!");
            }

            const data = await response.json();

            setRecipes(data.hits);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [completeRequest]);

    useEffect(() => {
        showRecipe();
    }, [completeRequest, showRecipe]);

    const inputHandler = (event) => {
        setSearch(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setCompleteRequest(search);
        setSearch(" ");
    };

    let listRecipes = <p className={classes.error_text}>No Recipes Found!</p>;

    if (completeRequest.length > 0) {
        listRecipes = <RecipesList recipes={recipes} />;
    }

    if (error) {
        listRecipes = <p className={classes.error_text}>{error}</p>;
    }

    if (isLoading) {
        listRecipes = <LoadingSpinner />;
    }

    return (
        <div className={classes.foody}>
            {!completeRequest ? <h1>What do you fancy today? </h1> : <h1>Enjoy!</h1>}

            <form className={classes.search_form} onSubmit={submitHandler}>
                <Input type="text" onChange={inputHandler} placeholder="Search Recipe" />
                <Button type="submit">
                    <b>Discover</b>
                </Button>
            </form>
            {listRecipes}
        </div>
    );
}

export default App;
