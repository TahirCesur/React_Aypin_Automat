/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import emailjs from "emailjs-com";
import Spacer from "../common/Spacer";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kol10j6",
        "template_3dj27vj",
        e.target,
        "NzLGFAgtvciJq5EXd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }

  return (
    <>
      <section id="services" className="services section-bg">
        <Spacer />
        <div className="container" data-aos="fade-up">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h2>{t("İLETİŞİM")}</h2>
            <p>
              {t(
                "Soru, görüş, öneri ve istekleriniz için aşağıdaki bilgiler aracılığıyla bize 7/24 ulaşabilirsiniz."
              )}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-10">
              <div className="icon-box" data-aos="fade-up">
                <div className="icon text-center">
                  <i className="bx bx-map"></i>
                </div>
                <h3 className="title text-center">{t("Adresimiz")}</h3>
                <p className="description text-center">
                  {t("Çalı Mahallesi Şen Cadde No : 21/A Nilüfer / Bursa")}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon text-center">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3 className="title text-center">{t("Gsm")}</h3>
                <p className="description text-center">(+90) 532 162 1647</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon text-center">
                  <i className="bx bx-envelope"></i>
                </div>
                <h3 className="title text-center">{t("Email")}</h3>
                <p className="description text-center">info@aypinautomat.com</p>
              </div>
            </div>
          </div>

          <div className="row contact">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12194.831007320683!2d28.9093333517199!3d40.17106014006093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca10ed3e42418f%3A0x67560ac9aa2cae3a!2zw4dhbMSxLCDFnmVuIENkLiBObzoyMSwgMTYxMTAgTmlsw7xmZXIvQnVyc2E!5e0!3m2!1str!2str!4v1683735425991!5m2!1str!2str"
                style={{
                  border: "4px solid white",
                  width: "100%",
                  height: "385px",
                  boxShadow: "0 0 30px #44589072;",
                }}
                title="Google Map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={t("Adınız")}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder={t("Emailiniz")}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder={t("Konu")}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder={t("Mesajınız")}
                      cols="40"
                      rows="5"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      value={t("Gönder")}
                      className="form-control mt-3"
                      style={{
                        borderRadius: "50px",
                        background: "#0000ff",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
