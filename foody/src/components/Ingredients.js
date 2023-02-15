import React, { useState } from "react";

import Button from "../UI/Button";

const Ingredients = (props) => {
  const [isClicked, setIsclicked] = useState(false);

  function submitHandler() {
    console.log("clicked");
    setIsclicked((isClicked) => !isClicked);
  }
  const ingredients = props.ingredientsText;
  return (
    <div>
      {isClicked && (
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      )}
      <Button className="button" onClick={submitHandler}>
        {!isClicked ? "Show Ingredients" : "Hide Ingredients"}
      </Button>
    </div>
  );
};

export default Ingredients;
