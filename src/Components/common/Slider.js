import React from "react";

function Slider2() {
  return (
    <>
      <section id="hero" className="clearfix">
        <div className="container" data-aos="fade-up">
          <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img
              src="assets/img/Aypinautomat/slider1.jpg"
              alt="Aypin Automat Slider"
              className="img-fluid"
            />
          </div>

          <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <div>
              <a href="#portfolios" className="btn-get-started scrollto">
                Talaşlı İmalat
              </a>
{/*               <a
                href="/about"
                className="btn-services scrollto"
                style={{ color: "#0000ff" }}
              >
                Hakkımızda
              </a> */}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Slider2;
