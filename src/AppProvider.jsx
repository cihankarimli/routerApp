import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [brand, setBrand] = useState("");

  const value = {
    brand,
    setBrand,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
