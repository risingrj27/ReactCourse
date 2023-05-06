import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/cartcontext'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.length;
    return (
        <>
            <button className={classes.button} onClick={props.onClicked}>
                <span className={classes.icon}> <CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                    {/* 3 */}
                    {numberOfCartItems}
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton;