const Ingredients = (props) => {
  const ingredients = props.ingredientsText;
  return (
    <div>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Ingredients;
