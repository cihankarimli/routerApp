import React from "react";
import { FormSelect, FormInput, InputWithRadio } from "./FormComponents";
import {
  carBrands,
  fuelTypes,
  carGears,
  carTypesRoofs,
  gearBoxes,
  carYear,
  engineVolume,
  carColors,
  carOwners,
} from "../FormData";

const VehicleDetails = () => {
  return (
    <div className="first-part-form">
      <FormSelect
        name="brand"
        label="Marka"
        options={carBrands.map((brand) => ({
          value: brand.name,
          name: brand.name,
        }))}
        required
      />

      <FormSelect
        name="fueltypes"
        label="Yanacaq növü"
        options={fuelTypes}
        required
      />

      <FormSelect
        name="gear"
        label="Ötürücü"
        options={carGears.map((gear) => ({
          value: gear.name,
          name: gear.name,
        }))}
        required
      />

      <FormSelect
        name="cartype"
        label="Ban növü"
        options={carTypesRoofs}
        required
      />

      <FormSelect
        name="gearbox"
        label="Sürətlər qutusu"
        options={gearBoxes}
        required
      />

      <div className="form-group">
        <label>Yürüş *</label>
        <InputWithRadio
          inputName="mileage"
          inputType="number"
          radioName="distance"
          radioOptions={[
            { value: "km", label: "km" },
            { value: "mi", label: "mi" },
          ]}
          rules={{ required: "Bu sahe teleb olunur" }}
        />
      </div>

      <FormSelect name="year" label="İl" options={carYear} required />

      <FormSelect name="color" label="Rəng" options={carColors} required />

      <FormSelect
        name="enginevolume"
        label="Mühərrikin həcmi, L"
        options={engineVolume}
        rules={{ required: "Doldurulmalidir" }}
      />

      <div className="form-group">
        <label>Qiymət *</label>
        <InputWithRadio
          inputName="price"
          inputType="number"
          radioName="currency"
          radioOptions={[
            { value: "AZN", label: "AZN" },
            { value: "USD", label: "USD" },
            { value: "EUR", label: "EUR" },
          ]}
          rules={{ required: "Yazilmalidir" }}
        />
      </div>

      <FormInput
        name="enginePower"
        label="Mühərrikin gücü, a.g."
        type="number"
        rules={{ required: "Yazilmalidir" }}
      />

      <FormSelect
        name="owner"
        label="Neçənci sahibisiniz?"
        options={carOwners}
      />
    </div>
  );
};

export default VehicleDetails;
