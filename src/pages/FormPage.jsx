import React from "react";
import MainForm from "../formComponents/MainForm";

function FormPAge() {
  const exitForm = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="header-form">
        <h1>Form Page</h1>
        <button onClick={exitForm} className="form-exit">
          Exit
        </button>
      </div>
      <MainForm />
    </>
  );
}

export default FormPAge;
