import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirect_uri={window.location.origin}>
    <Provider store={store}>
      <Router>   
        <App />
      </Router>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
