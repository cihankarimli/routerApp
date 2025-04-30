import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormSelect = ({ name, label, options, rules, required }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules || (required ? { required: "Bu sahə tələb olunur" } : {})}
        render={({ field }) => (
          <select {...field}>
            <option value="">Seçin</option>
            {options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.name || option}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && <p className="error">{errors[name].message}</p>}
    </div>
  );
};

export const FormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  rules,
  required,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-group">
      <label>
        {label} {required && "*"}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules || (required ? { required: "Bu sahə tələb olunur" } : {})}
        render={({ field }) => (
          <input type={type} placeholder={placeholder} {...field} />
        )}
      />
      {errors[name] && <p className="error">{errors[name].message}</p>}
    </div>
  );
};

export const RadioGroup = ({ name, options, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <div className="radio-group">
      {options.map((option, index) => (
        <label key={index}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
              <input
                type="radio"
                value={option.value}
                checked={field.value === option.value}
                onChange={() => field.onChange(option.value)}
              />
            )}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export const InputWithRadio = ({
  inputName,
  inputType,
  radioName,
  radioOptions,
  rules,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-with-radio">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Controller
          name={inputName}
          control={control}
          rules={rules}
          render={({ field }) => <input type={inputType} {...field} />}
          style={{ marginLeft: "10px" }}
        />
        <RadioGroup
          name={radioName}
          options={radioOptions}
          defaultValue={radioOptions[0].value}
        />
      </div>
      {errors[inputName] && (
        <p className="error">{errors[inputName].message}</p>
      )}
    </div>
  );
};
