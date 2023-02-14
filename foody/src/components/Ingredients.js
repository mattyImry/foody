const Ingredients = (props) =>{

    const ing = [props.ingredients];
    console.log(ing);

    return (
    <div>
        <ol>
            {ing.map(ingredient => (<li>{ingredient.text}</li>))}
        </ol>
    </div>
    );
}

export default Ingredients;

