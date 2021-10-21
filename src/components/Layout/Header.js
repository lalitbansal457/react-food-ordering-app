import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpeg";

const Header = props => {
    
    return (
        <>  
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={MealsImage} alt="Placeholder for meals" /> 
            </div>

        </>
    )
}

export default Header;