import React from "react";
import { useTranslation } from "react-i18next";
import Spacer from "../common/Spacer";

function Aboutus() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <Spacer />
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("HAKKIMIZDA")}</h2>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <table className="">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/img/Aypinautomat/10.webp"
                      className="img-fluid"
                      alt={t("Hakkımızda")}
                      style={{borderRadius: "5px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-7">
            <p style={{ color: "black", fontSize: "14px" }}>
              {t(
                "Aypin Automat, 2022 yılında kurulan yeni nesil CNC kayar otomat torna tezgahlarıyla özel pim, vida, somun gibi bağlantı elemanları üretim firmasıdır. Müşterilerimize yüksek kaliteli ürünler sunmak ve onların ihtiyaçlarını karşılamak için tutkuyla çalışıyoruz."
              )}
              <br />
              <br />
              {t(
                "Modern teknolojiye yatırım yaparak üretim süreçlerimizi sürekli iyileştirmekteyiz. CNC torna tezgahlarımız, hassas ve kaliteli parçaların üretiminde bize büyük avantaj sağlamaktadır. Ürün yelpazemiz, çeşitli endüstriyel sektörlerde kullanılan çeşitli pimler ve bağlantı elemanlarını içermektedir."
              )}
              <br />
              <br />
              {t(
                "Müşterilerimizin spesifik taleplerini karşılamak için özelleştirilmiş üretim çözümleri sunuyoruz. Kalite, hassasiyet ve dayanıklılık, üretim süreçlerimizin temel odak noktalarıdır."
              )}
              <br />
              <br />
              {t(
                "Müşteri memnuniyetine büyük önem veriyoruz ve her bir müşteriye özel hassasiyet gösteriyoruz. İşbirliği ve uzun süreli ilişkiler kurarak müşterilerimizin gereksinimlerini anlamak ve onlara uygun çözümler sunmak için çalışıyoruz."
              )}
              <br />
              <br />
              {t(
                "Aypin Automat olarak, kalite standartlarına bağlılıkla sektörde öncü bir firma olmayı hedefliyoruz. Müşterilerimize değer katmayı, sürekli gelişimi teşvik etmeyi ve yenilikçi çözümler sunmayı amaçlıyoruz."
              )}
              <br />
              <br />
              {t("Bize güvenen müşterilerimize şimdiden teşekkür ederiz.")}
              <br />
              {t(
                "Sizlerle uzun vadeli ve başarılı iş ilişkileri kurmayı heyecanla bekliyoruz."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
