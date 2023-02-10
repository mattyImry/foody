import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    showRecipe();
  }, []);

  const showRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=REQUIRED&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="foody">
      <form className="search-form" action="">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Discover
        </button>
      </form>
    </div>
  );
}

export default App;
