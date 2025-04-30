import React from "react";
import { FormInput } from "./FormComponents";

const ContactSection = () => {
  return (
    <div className="contact">
      <h3>Elaqe</h3>

      <div className="name">
        <FormInput
          name="name"
          label="Ad"
          placeholder="Adınızı daxil edin"
          rules={{
            required: "Adınızı daxil edin",
            minLength: {
              value: 2,
              message: "Adınız ən azı 2 simvoldan ibarət olmalıdır",
            },
          }}
        />
      </div>

      <div className="email">
        <FormInput
          name="email"
          label="Email"
          rules={{
            required: "Poct hesabivizi daxil edin",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Daxil etdiyiniz email duzgun deyil",
            },
          }}
        />
      </div>

      <div className="phone">
        <FormInput
          name="phone"
          label="Phone Number"
          placeholder="000-000-00-00"
          rules={{
            required: "Telefon nomresini daxil edin",
            pattern: {
              value: /^\d{3}\d{3}\d{2}\d{2}$/,
              message: "Nomre formati duzgun deyil",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ContactSection;
