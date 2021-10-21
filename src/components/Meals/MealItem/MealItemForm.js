import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
const MealItemForm = props => {
	return (
		<form className={classes.form}>
			<Input label="amount" input={{
				type: "number",
				id: "amount",
				min: 1,
				max: 5,
				stepvalue: 1,
				defaultValue: 1

			}} />
			<button>+ Add</button>
		</form>
	)
}

export default MealItemForm