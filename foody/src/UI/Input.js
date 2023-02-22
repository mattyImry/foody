import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <input
            type={props.type}
            className={classes.input}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    );
};

export default Input;
