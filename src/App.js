import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Dashboard from "./components/Dashboard";

function App() {
  const store = createStore(() => {});
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
