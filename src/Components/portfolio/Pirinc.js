import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Pirinc() {
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
                  <Link
                    className="nav-link active show"
                    to="/pirinc"
                    onClick={scrollToTop}
                  >
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
                    <img src="assets/img/Aypinautomat/pirinc1.webp" alt="Özel Üretim Pirinç Parçalar" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="portfolio-description text-center p-0">
                <h2 style={{ color: "#0000FF" }}>
                  {t("Özel Üretim Pirinç Parçalar")}
                </h2>
                <p>
                  {t(
                    "Pirinç, bakır ve çinko gibi metallerin alaşımlarından oluşan bir malzemedir."
                  )}
                  <br />
                  {t(
                    "Özel üretim pirinç parçalar ise belirli bir uygulama veya gereksinime yönelik olarak özelleştirilmiş bir pirinç çeşididir. Bu özelleştirme genellikle pirincin içeriğindeki bakır ve çinko oranının ayarlanmasıyla gerçekleştirilir. Bu oranlar, özel pirincin özelliklerini belirleyen önemli faktörlerdir. Özel pirinç, genellikle yüksek kalite ve dayanıklılık gerektiren uygulamalarda kullanılır."
                  )}
                  <br />
                  {t(
                    "Özel üretim pirinç parçalar, mücevherat, saat yapımı, müzik enstrümanları, elektrikli aletler, otomotiv parçaları gibi farklı endüstrilerde kullanılan bir malzemedir."
                  )}
                  <br />
                  {t(
                    "Dayanıklılığı, korozyon direnci, elverişli işlenebilirlik özelliği ve estetik çekiciliğiyle tercih edilen bir seçenektir."
                  )}
                  <br />
                  {t(
                    "Ayrıca, özel üretim pirinç, çeşitli endüstrilerde kullanılan bir malzeme olduğu için geniş bir uygulama yelpazesine sahiptir."
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

export default Pirinc;
