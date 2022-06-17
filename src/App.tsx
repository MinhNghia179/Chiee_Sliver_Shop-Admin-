import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./router";
import store, { persistor } from "./setup/redux/Store";
import "assets/styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
