import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Civata() {
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
                  <Link
                    className="nav-link active show"
                    to="/civata"
                    onClick={scrollToTop}
                  >
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
                    <img src="assets/img/Aypinautomat/civata1.webp" alt="Özel Üretim Civatalar" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description text-center p-0">
                <h2 style={{ color: "#0000FF" }}>
                  {t("Özel Üretim Civatalar")}
                </h2>
                <p>
                  {t(
                    "Özel üretim civatalar, genellikle alaşımlı çelik, paslanmaz çelik, pirinç veya titanyum gibi malzemelerden üretilir. Bu malzemeler, yüksek mukavemet, korozyon direnci ve diğer özel gereksinimleri karşılamak için seçilir."
                  )}
                  <br />
                  {t(
                    "CNC ile üretilen özel civatalar, çeşitli endüstriyel uygulamalarda kullanılan özelleştirilmiş bağlantı elemanlarıdır. Civatalar, parçaları bir arada tutmak, montajı sağlamak ve bağlantıyı güçlendirmek için kullanılır."
                  )}
                  <br />
                  {t(
                    "Özel üretim civatalar, genellikle otomotiv, havacılık, inşaat, makine ve elektronik endüstrilerinde yaygın olarak kullanılır. Bu civatalar, montaj hatlarında, makine parçalarında, yapısal bağlantılarda ve diğer birçok uygulamada kullanılan önemli bağlantı elemanlarıdır. Parçaların bir arada tutulmasını, montajı sağlamasını ve bağlantıyı güçlendirmesini amaçlar. Malzeme seçimi ve özel tasarım seçenekleri sayesinde farklı gereksinimlere uyan özel civatalar üretilebilir."
                  )}
                  <br />
                  <a href="https://aypinautomat.com" style={{color:"#fff"}}>
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

export default Civata;
