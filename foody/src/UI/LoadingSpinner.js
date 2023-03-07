import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
    return (
        <div className={classes.spinner_container}>
            <p>
                <b>Loading...</b>
            </p>
            <div className={classes.loading_spinner}></div>
        </div>
    );
}

export default LoadingSpinner;
