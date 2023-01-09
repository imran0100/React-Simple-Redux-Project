import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./component/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
