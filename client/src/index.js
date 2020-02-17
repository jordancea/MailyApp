import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers/index";
import "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";

import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";

window.axios = axios;

const middleware = [reduxThunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
console.log("Env is", process.env.NODE_ENV);
