import CartContext from './cartcontext'

const CartProvider = props => {
    const addItemhandler = (item) =>{};
    
    const removeItemFromCartHandler = (id) => {};

    const cartContext ={
        items:[],
        totalAmount:0,
        addItem:addItemhandler,
        removeItem: removeItemFromCartHandler
    };

    return( <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider;