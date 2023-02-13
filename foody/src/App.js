import React, { useEffect, useState } from "react";

import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [completeRequest, setCompleteRequest] = useState("");

  useEffect(() => {
    showRecipe();
  }, [completeRequest]);

  const showRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${completeRequest}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const inputHandler = (event) => {
    setSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setCompleteRequest(search);
    setSearch("");
  };

  return (
    <div className="foody">
      <form className="search-form" onSubmit={submitHandler}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={inputHandler}
        />
        <button className="search-button" type="submit">
          Discover
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
