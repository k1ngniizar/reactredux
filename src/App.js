import { Provider } from "react-redux";
import PizzaBox from "./components/PizzaBox";
import { store } from "./components/redux/store";
// import HookContainer from "./components/HookContainer";
import BurgerBox from "./components/BurgerBox";

function App() {
  return (
    <Provider store={store} >
      <PizzaBox />
      {/* <HookContainer /> */}
      <BurgerBox />
    </Provider>
  );
}

export default App;
