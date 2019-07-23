import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";


let store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
