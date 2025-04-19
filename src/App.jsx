import React from "react";
import "./App.css";
import Cardwrapper from "./componenets/Cardwrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import Layout from "./componenets/layout/Layout";
import ErrorPage from "./ErrorPAge";
import Filter from "./componenets/Filter";
import AppProvider from "./AppProvider";
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Cardwrapper />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
