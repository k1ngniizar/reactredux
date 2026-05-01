import { Provider } from "react-redux";
// import PizzaBox from "./components/PizzaBox";
import { store } from "./components/redux/store";
import HookContainer from "./components/HookContainer";

function App() {
  return (
    <Provider store={store} >
      {/* <PizzaBox /> */}
      <HookContainer />
    </Provider>
  );
}

export default App;
