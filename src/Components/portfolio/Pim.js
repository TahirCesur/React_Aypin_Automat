import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Pim() {
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
                  <Link
                    className="nav-link active show"
                    to="/pim"
                    onClick={scrollToTop}
                  >
                    {t("Özel Üretim Pimler")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pirinc" onClick={scrollToTop}>
                    {t("Özel Üretim Pirinç Parçalar")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/burc" onClick={scrollToTop}>
                    {t("Özel Üretim Burçlar")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/Aypinautomat/pim1.webp" alt="Özel Üretim Pimler" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description text-center p-0">
                <h2 style={{ color: "#0000FF" }}>{t("Özel Üretim Pimler")}</h2>
                <p>
                  {t(
                    "CNC ile üretilen özel pimler, çeşitli endüstriyel uygulamalarda kullanılan hassas ve özelleştirilmiş parçalardır."
                  )}
                  <br />
                  {t(
                    "Pimler, bir iş parçasının sabitlenmesi, birleştirilmesi veya hareket ettirilmesi gibi farklı amaçlar için kullanılabilir."
                  )}
                  <br />
                  {t(
                    "Özel üretim pimler, genellikle otomotiv, havacılık, makineler, elektronik ve medikal endüstrilerinde kullanılır. Bu pimler, özellikle montaj hatlarında veya makine parçalarının birbirine bağlanması, pozisyonlama veya sabitleme için kullanılır. Özel üretim pimler, parçaların doğru konumda kalmasını sağlayarak hassas montaj ve uyum sağlar."
                  )}
                  <br />
                  {t(
                    "CNC ile üretilen özel pimler, yüksek kaliteli, uyumlu ve güvenilir bir parça birleştirme çözümü sunar. Bu pimler, karmaşık geometrileri ve hassas ölçümleri kolayca gerçekleştirebilir ve endüstriyel uygulamalarda önemli bir rol oynar."
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

export default Pim;
