import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Strore/index";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <NavBar />
      <App />
      <Footer />
    </React.StrictMode>
  </Provider>
);
