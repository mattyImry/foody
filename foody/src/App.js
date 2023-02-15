import React, { useEffect, useState } from "react";

import classes from "./App.module.css";
import Recipe from "./components/Recipe";
import Button from "./UI/Button";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [completeRequest, setCompleteRequest] = useState("");

  useEffect(() => {
    const showRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${completeRequest}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
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
      <form className={classes.search_form} onSubmit={submitHandler}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={inputHandler}
        />
        <Button className="button" type="submit">
          Discover
        </Button>
      </form>
      <div className={classes.recipe_wrapper}>
        <div className={classes.recipe}>
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              type={recipe.recipe.mealType}
              dishType={recipe.recipe.dishType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
