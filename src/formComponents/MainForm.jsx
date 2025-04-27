import React from "react";
import { useForm } from "react-hook-form";
import SecondPartForm from "./SecondPartForm";

function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const carBrands = [
    { id: 1, name: "Toyota" },
    { id: 2, name: "Honda" },
    { id: 3, name: "Ford" },
    { id: 4, name: "Chevrolet" },
    { id: 5, name: "Nissan" },
    { id: 6, name: "Hyundai" },
    { id: 7, name: "Kia" },
    { id: 8, name: "Volkswagen" },
    { id: 9, name: "Subaru" },
    { id: 10, name: "Mazda" },
  ];
  const fuelTypes = [`Petrol`, `Diesel`, `Electric`, `Hybrid`];
  const carGears = [
    { id: 1, name: "Manual" },
    { id: 2, name: "Automatic" },
    { id: 3, name: "Semi-Automatic" },
  ];
  const carTypesRoofs = [
    "sedan",
    "hatchback",
    "coupe",
    "convertible",
    "SUV",
    "pickup truck",
  ];
  const gearBoxes = [
    "5-speed manual",
    "6-speed manual",
    "7-speed automatic",
    "8-speed automatic",
  ];
  const carYear = [
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
  ];
  const engineVolume = [
    "1.0L",
    "1.2L",
    "1.4L",
    "1.6L",
    "1.8L",
    "2.0L",
    "2.2L",
    "2.4L",
    "2.5L",
    "3.0L",
  ];
  const carColors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Silver",
    "Gray",
    "Yellow",
    "Orange",
    "Purple",
  ];
  const carOwners = [
    "First owner",
    "Second owner",
    "Third owner",
    "Fourth owner",
    "Fifth owner",
  ];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-grid">
        <div className="first-part-form">
          <div className="form-group">
            <label>Marka *</label>
            <select
              {...register("brand", { required: "Bu sahə tələb olunur" })}
            >
              <option value=""> Seçin</option>
              {carBrands.map((brand) => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
            {errors.brand && <p className="error">{errors.brand.message}</p>}
          </div>

          <div className="form-group">
            <label>Yanacaq növü *</label>
            <select
              {...register("fueltypes", { required: "Bu sahə tələb olunur" })}
            >
              <option value="">Seçin</option>
              {fuelTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.fueltypes && (
              <p className="error">{errors.fueltypes.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Ötürücü *</label>
            <select {...register("gear", { required: "Bu sahə tələb olunur" })}>
              <option value="">Seçin</option>
              {carGears.map((gear) => (
                <option key={gear.id} value={gear.name}>
                  {gear.name}
                </option>
              ))}
            </select>
            {errors.gear && <p className="error">{errors.gear.message}</p>}
          </div>

          <div className="form-group">
            <label>Ban növü *</label>
            <select
              {...register("cartype", { required: "Bu sahə tələb olunur" })}
            >
              <option value="">Seçin</option>
              {carTypesRoofs.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.cartype && (
              <p className="error">{errors.cartype.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Sürətlər qutusu *</label>
            <select
              {...register("gearbox", { required: "Bu sahə tələb olunur" })}
            >
              <option value="">Seçin</option>
              {gearBoxes.map((box, index) => (
                <option key={index} value={box}>
                  {box}
                </option>
              ))}
            </select>
            {errors.gearbox && (
              <p className="error">{errors.gearbox.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Yürüş *</label>
            <div className="input-with-radio">
              <input
                type="number"
                {...register("radio", { required: "Bu sahe teleb olunur" })}
              />
              <div className="radio-group">
                <label>
                  <input type="radio" name="distance" defaultChecked /> km
                </label>
                <label>
                  <input type="radio" name="distance" /> mi
                </label>
              </div>
            </div>
            {errors.radio && <p className="error">{errors.radio.message}</p>}
          </div>

          <div className="form-group">
            <label>İl *</label>
            <select {...register("year", { required: "Bu sahə tələb olunur" })}>
              <option value="">Seçin</option>
              {carYear.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.year && <p className="error">{errors.year.message}</p>}
          </div>

          <div className="form-group">
            <label>Rəng *</label>
            <select
              {...register("color", { required: "Bu sahə tələb olunur" })}
            >
              <option value="">Seçin</option>
              {carColors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
            {errors.color && <p className="error">{errors.color.message}</p>}
          </div>

          <div className="form-group">
            <label>Mühərrikin həcmi, L *</label>
            <select
              {...register("enginevalume", { required: "Doldurulmalidir" })}
            >
              <option value="">Seçin</option>
              {engineVolume.map((volume, index) => (
                <option key={index} value={volume}>
                  {volume}
                </option>
              ))}
            </select>
            {errors.enginevalume && (
              <p className="error">{errors.enginevalume.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Qiymət *</label>
            <div className="input-with-radio">
              <input
                {...register("price", { required: "Yazilmalidir" })}
                type="number"
              />

              <div className="radio-group">
                <label>
                  <input type="radio" name="currency" defaultChecked /> AZN
                </label>
                <label>
                  <input type="radio" name="currency" /> USD
                </label>
                <label>
                  <input type="radio" name="currency" /> EUR
                </label>
              </div>
            </div>
            {errors.price && <p className="error">{errors.price.message}</p>}
          </div>

          <div className="form-group">
            <label>Mühərrikin gücü, a.g. *</label>
            <input
              {...register("enginePower", { required: "Yazilmalidir" })}
              type="number"
            />
            {errors.enginePower && (
              <p className="error">{errors.enginePower.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Neçənci sahibisiniz?</label>
            <select>
              <option>Seçin</option>
              {carOwners.map((owner, index) => (
                <option key={index} value={owner}>
                  {owner}
                </option>
              ))}
            </select>
          </div>
        </div>
        <SecondPartForm />

        <div className="contact">
          <h3>Elaqe</h3>

          <div className="name">
            <label>Ad</label>
            <input
              type="text"
              placeholder="Adınızı daxil edin"
              className="name-input"
              {...register("name", {
                required: "Adınızı daxil edin",
                minLength: {
                  value: 2,
                  message: "Adınız ən azı 2 simvoldan ibarət olmalıdır",
                },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="email">
            <label>Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Poct hesabivizi daxil edin",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Daxil etdiyiniz email duzgun deyil",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="phone">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="000-000-00-00"
              className="phone-input"
              {...register("phone", {
                required: "Telefon nomresini daxil edin",
                pattern: {
                  value: /^\d{3}\-\d{3}-\d{2}-\d{2}$/,
                  message: "Nomre formati duzgun deyil",
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>

        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default MainForm;
