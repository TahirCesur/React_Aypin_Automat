import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Slider2() {
  const { t } = useTranslation();

  return (
    <>
      <section id="hero">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-lg-12 pt-5 pt-lg-0 d-flex align-items-center justify-content-center">
              <div data-aos="zoom-out">
                <Link to="/portfolios" className="btn-get-started scrollto">
                  <h1 className="text-center">{t("Talaşlı İmalat")}</h1>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-12 hero-img"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img
                src="assets/img/Aypinautomat/sliderorj1.png"
                alt="Aypin Automat Slider"
                width={"100%"}
                height={"90%"}
              />
            </div>
          </div>
        </div>

        <svg
          className="hero-waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            />
          </g>
          <g className="wave2">
            <use
              xlinkHref="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
    </>
  );
}

export default Slider2;
