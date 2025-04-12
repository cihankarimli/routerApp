import React from "react";
import "./App.css";
import Cardwrapper from "./pages/Cardwrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cardwrapper />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
