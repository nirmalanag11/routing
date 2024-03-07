import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Index from "./Pages";
import Registration from "./Pages/registration";
import Login from "./Pages/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
