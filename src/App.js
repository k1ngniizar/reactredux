import { Provider } from "react-redux";
import PizzaBox from "./components/PizzaBox";
import { store } from "./components/redux/store";

function App() {
  return (
    <Provider store={store} >
      <PizzaBox />
    </Provider>
  );
}

export default App;
