import { Provider } from "react-redux";
import PizzaBox from "./components/PizzaBox";
import { store } from "./components/redux/store";
import HookContainer from "./components/HookContainer";
import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";

function App() {
  return (
    <Provider store={store} >
      <CustomerChoice />
      <PizzaBox />
      <HookContainer />
      <BurgerBox />
    </Provider>
  );
}

export default App;
