import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: "amount_" + props.id,
                    type: "number", // built-in input element type
                    min: "1", // default input validation attributes
                    max: "5", // 1 <= amount <=5
                    step: "1",
                    defaultValue: "1", // initial input value
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
