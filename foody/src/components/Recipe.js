const Recipe = (props) => {

    const cal = Math.floor(props.calories);

    return(
        <div>
            <h1>{props.title}</h1>
            <p>Calories:{cal}</p>
            <img src={props.image} alt="" />
        </div>
    );
}

export default Recipe;