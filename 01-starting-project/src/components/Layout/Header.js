import {Fragment} from 'react';
import mealsImage from '../../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
     <Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            {/* <button>Cart</button> */}
            <HeaderCartButton  />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt ="A table full of delicious food!" />
        </div>
     </Fragment>  
    )
}

export default Header;