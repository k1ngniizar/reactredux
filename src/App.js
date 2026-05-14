import { Provider } from "react-redux";
import PizzaBox from "./components/PizzaBox";
import { store } from "./components/redux/store";
import HookContainer from "./components/HookContainer";
import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <Provider store={store} >
      <CustomerChoice />
      <PizzaBox />
      <HookContainer />
      <BurgerBox />
      <ProductContainer />
    </Provider>
  );
}

export default App;
