import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'

function App() {
  const [isModalVisible, setModalVisible] = useState(false)
 
  const modalVisible = () =>{
    setModalVisible(true)
  }

  const modalNotVisible = () => {
    setModalVisible(false)
  }
  return (
    <Fragment>
      {isModalVisible && <Cart onModalClicked={modalNotVisible} />}
      <Header onModalClicked = {modalVisible} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
