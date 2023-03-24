import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./comp/Home/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./comp/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path="/" exact />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
