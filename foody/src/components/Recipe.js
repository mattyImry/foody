import Ingredients from "./Ingredients";

const Recipe = (props) => {

    const cal = Math.floor(props.calories);

    // const ingredientsList = [props.ingredients];
    // console.log(ingredients)

    return(
        <div>
            <h1>{props.title}</h1>
            <p>Calories:{cal}</p>
            <img src={props.image} alt="" />
            {/* <Ingredients ingredients={[props.ingredients]}/> */}
            {props.ingredients.map(ingredient => <li>{ingredient.text}</li> )}

        </div>
    );
}

export default Recipe;