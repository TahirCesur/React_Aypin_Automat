/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  <img
                    src="assets/img/Aypinautomat/aypin.webp"
                    alt="Aypin Logo"
                    className="img"
                    maxWidth={"100%"}
                    height={"100%"}
                  />
                  <br />
                  <br />
                  <p>
                    {t("Çalı Mahallesi Şen Cadde")} <br />
                    {t("No : 21/A")} <br />
                    {t("Nilüfer / Bursa")}
                    <br />
                    <br />
                    <strong>{t("Gsm")} :</strong> (+90) 532 162 1647
                    <br />
                    <strong>Email :</strong> info@aypinautomat.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://www.google.com/"
                      className="google-plus"
                      title="google"
                      target="_blank"
                    >
                      <i className="bx bxl-google"></i>
                    </a>
                    <a
                      href="https://wa.me/905321621647"
                      title={t("Bize Whatsapptan Ulaşın")}
                      target="_blank"
                      className="instagram"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h3>{t("Kurumsal")}</h3>
                <br/>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/" onClick={scrollToTop}>
                      {t("Anasayfa")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/aboutus" onClick={scrollToTop}>
                      {t("Hakkımızda")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/portfolios" onClick={scrollToTop}>
                      {t("Ürünlerimiz")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/product" onClick={scrollToTop}>
                      {t("Üretim")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/contact" onClick={scrollToTop}>
                      {t("İletişim")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h3>{t("Hammadde")}</h3>
                <br/>
                <ul>
                  <h4 style={{fontSize:"14px", marginBottom:"0px"}}>{t("Hassas Ölçülerle Hazırlanan")}</h4>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/civata" onClick={scrollToTop}>
                      {t("Özel Üretim Civatalar")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/pim" onClick={scrollToTop}>
                      {t("Özel Üretim Pimler")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/pirinc" onClick={scrollToTop}>
                      {t("Özel Üretim Pirinç Parçalar")}
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/burc" onClick={scrollToTop}>
                      {t("Özel Üretim Burçlar")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            <strong>
              <span> AYPİN AUTOMAT &copy; 2023</span>
            </strong>
            <br />
            {t("Tüm Hakları Saklıdır")}
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
        title={t("Yukarı Çık")}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <a
        href="https://wa.me/905321621647"
        title={t("Bize Whatsapptan Ulaşın")}
        target="_blank"
        className="back-to-top d-flex align-items-center justify-content-center active"
      >
        <i className="bx bxl-whatsapp"></i>
      </a>
    </>
  );
}

export default Footer;
