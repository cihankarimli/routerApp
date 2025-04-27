import React from "react";
import { useForm } from "react-hook-form";

function SecondPartForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const carMarkets = ["America", "Deutschland", "Japan", "China", "Russia"];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="vaziyyeti-form">
          <div className="form-group">
            <label>Hansı bazar üçün yığılıb</label>
            <select>
              <option>Seçin</option>
              {carMarkets.map((market, index) => (
                <option key={index} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
          <h1>Vaziyyeti</h1>

          <div className="form-section">
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="vurugu-var" />
                <strong>Vuruğu var</strong>
                <p>
                  Bir ve ya bir neça detail deyişdirilip ve ya temir olunub.
                </p>
              </label>
            </div>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="ranglenib" />
                <strong>Ranglenib</strong>
                <p>
                  Bir ve ya bir neça detail renglenib ve ya kosmetik işler
                  görülüb.
                </p>
              </label>
            </div>
          </div>

          <hr className="divider" />

          <div className="form-section">
            <h3>Yerlerin sayı</h3>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="gezali-hisseler" />
                <strong>Gezali ve ya ehtiyat hisseler üçün</strong>
                <p>
                  Temire ehliyacı var ve ya umumiyyetle yararsız vaziyyetdedir.
                </p>
              </label>
            </div>

            <div className="number-selector">
              {[1, 2, 3, 4, 5, 6, 7, "8+"].map((num) => (
                <button key={num} className="number-btn">
                  {num}
                </button>
              ))}
            </div>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="olceyi-olunmasin" />
                <strong>Ölçeği olunmasın</strong>
              </label>
            </div>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="kreditle" />
                <strong>Kreditle</strong>
                <p>Barter mümkündür</p>
              </label>
            </div>
          </div>

          <hr className="divider" />

          <div className="form-section">
            <h3>VIN-kod</h3>

            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="vin-kod" />
                <strong>VIN-kodu haradan tapmaçı olan?</strong>
              </label>
            </div>
          </div>

          <hr className="divider" />

          <div className="form-section">
            <h3>Eleve mekumat</h3>
            <textarea
              className="additional-info"
              placeholder="Əlavə məlumatları buraya yazın..."
            ></textarea>
          </div>

          <hr className="divider" />

          <div className="form-section">
            <h3>Aytomobilin techizatı</h3>

            <div className="equipment-grid">
              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="yungul-lehimli-diskler" />
                  <strong>Yüngül lehimli diskler</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="abs" />
                  <strong>ABS</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="lyuk" />
                  <strong>Lyuk</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="yagish-sensoru" />
                  <strong>Yağış sensoru</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="merkezi-capanma" />
                  <strong>Merkezi çapanma</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="park-radar" />
                  <strong>Park radar</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="kondisioner" />
                  <strong>Kondisioner</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="oturacaq-isidilmesi" />
                  <strong>Oturacaçların isidilmesi</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="deri-salon" />
                  <strong>Deri salon</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="ksenon-lampalar" />
                  <strong>Ksenon lampalar</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="arxa-kamera" />
                  <strong>Arxa görüntü kamerası</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="yan-perdeler" />
                  <strong>Yan perdeler</strong>
                </label>
              </div>

              <div className="equipment-item">
                <label>
                  <input type="checkbox" name="oturacaq-ventilyasiya" />
                  <strong>Oturacaçların ventilyasiyası</strong>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SecondPartForm;
