import Ingredients from "./Ingredients";

const Recipe = (props) => {

    const cal = Math.floor(props.calories);

    return(
        <div className="recipe">
            <h1>{props.title}</h1>
            <h3>Serving for {props.type}</h3>
            <h3>Type of Dish:{props.dishType}</h3>
            <p>Calories:{cal}</p>
            <img src={props.image} alt="" />
            <Ingredients ingredientsText={props.ingredients} />
        </div>
    );
}

export default Recipe;