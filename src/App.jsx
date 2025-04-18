import React from "react";
import "./App.css";
import Cardwrapper from "./pages/Cardwrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import Layout from "./componenets/layout/Layout";
import ErrorPAge from "./ErrorPAge";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Cardwrapper />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Route>
        <Route path="*" element={<ErrorPAge />} />
      </Routes>
    </Router>
  );
}

export default App;
