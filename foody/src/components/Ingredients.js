import React, { useState } from "react";
import classes from "./Ingredients.module.css";

import Button from "../UI/Button";

const Ingredients = (props) => {
  const [isClicked, setIsclicked] = useState(false);
  const ingredients = props.ingredientsText;

  function submitHandler() {
    setIsclicked((isClicked) => !isClicked);
  }

  return (
    <div className={classes.ingredients_text}>
      {isClicked && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      )}
      <Button className="button" onClick={submitHandler}>
        {!isClicked ? "Show Ingredients" : "Hide Ingredients"}
      </Button>
    </div>
  );
};

export default Ingredients;
