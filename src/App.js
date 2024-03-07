import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./Pages";
import Login from "./Pages/login";
import Registration from "./Pages/registration";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
