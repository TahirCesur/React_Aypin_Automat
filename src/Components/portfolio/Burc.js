import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Burc() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SRLWrapper>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12">
              <ul className="nav nav-tabs flex-direction justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/civata" onClick={scrollToTop}>
                    {t("Özel Üretim Civatalar")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pim" onClick={scrollToTop}>
                    {t("Özel Üretim Pimler")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pirinc" onClick={scrollToTop}>
                    {t("Özel Üretim Pirinç Parçalar")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active show"
                    to="/burc"
                    onClick={scrollToTop}
                  >
                    {t("Özel Üretim Burçlar")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/Aypinautomat/burc1.webp" alt="Özel Üretim Burçlar" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description text-center p-0">
                <h2 style={{ color: "#0000FF" }}>{t("Özel Üretim Burçlar")}</h2>
                <p>
                  {t(
                    "CNC ile üretilen özel burçlar, çeşitli endüstriyel uygulamalarda kullanılan özelleştirilmiş yataklama elemanlarıdır. Burçlar, birbirine temas eden parçalar arasında sürtünmeyi azaltmak, yükleri taşımak ve döner veya lineer hareketi sağlamak için kullanılır."
                  )}
                  <br />
                  {t(
                    "Özel üretim burçlar, genellikle makine mühendisliği, otomotiv, havacılık, enerji, hidrolik ve endüstriyel ekipmanlarda kullanılır. Bu burçlar, döner ve lineer hareketli parçaların yataklanmasında ve sürtünmeyi azaltmak için kullanılır."
                  )}
                  <br />
                  {t(
                    "Özetlemek gerekirse, CNC ile üretilen özel burçlar, yüksek hassasiyet, dayanıklılık, sürtünme azaltma ve geniş uygulama çeşitliliği gibi avantajlar sunar. Bu burçlar, endüstriyel ekipmanların verimliliğini artırmak, aşınma ve yıpranmayı azaltmak ve uzun ömürlü yataklama çözümleri sunmak için önemli bir bileşen olarak kullanılır."
                  )}
                  <br />
                  <a href="https://aypinautomat.com" style={{ color: "#fff" }}>
                    {t(
                      "Daha fazla bilgi için aypinautomat.com adresindeki iletişimden bize ulaşabilirsiniz."
                    )}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SRLWrapper>
  );
}

export default Burc;
