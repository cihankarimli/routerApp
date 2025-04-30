import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import ContactSection from "./ContactSection";
import SecondPartForm from "./SecondPartForm";
import VehicleDetails from "./VehicleDetails";

function MainForm() {
  const methods = useForm({
    defaultValues: {
      brand: "",
      fueltypes: "",
      gear: "",
      cartype: "",
      gearbox: "",
      distance: "km",
      mileage: "",
      year: "",
      color: "",
      enginevolume: "",
      price: "",
      currency: "AZN",
      enginePower: "",
      owner: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="form-grid">
          <VehicleDetails />
          <SecondPartForm />
          <ContactSection />
          <input className="submit" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}

export default MainForm;
