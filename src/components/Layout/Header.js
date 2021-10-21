import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpeg";

import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    
    return (
        <>  
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="Placeholder for meals" /> 
            </div>
        </>
    )
}

export default Header;