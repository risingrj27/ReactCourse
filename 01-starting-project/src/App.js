import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartContext from "./Store/cartcontext";

function App() {
  const [isModalVisible, setModalVisible] = useState(false)
 
  const showCartHandler = () =>{
    setModalVisible(true)
  }

  const hideCartHandler = () => {
    setModalVisible(false)
  }
  return (
    <CartContext>
      {isModalVisible && <Cart onModalClicked={hideCartHandler} />}
      <Header onModalClicked = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
