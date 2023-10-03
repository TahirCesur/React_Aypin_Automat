/* eslint-disable no-octal-escape */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import ProductOne from "./ProductOne";
import Spacer2 from "../common/Spacer2";

function Product() {
  const { t } = useTranslation();
  return (
    <SRLWrapper>
      <>
        <div className="product-tabs bg-custom-light mt-5 p-10">
          <Spacer2 />
          <div className="container py-3" data-aos="fade-up">
            <div class="section-title" data-aos="fade-in" data-aos-delay="100">
              <h2>{t("ÜRETİM")}</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="row py-3 ">
                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/1.webp"
                          pictureorj="/assets/img/Aypinautomat/1.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/2.webp"
                          pictureorj="/assets/img/Aypinautomat/2.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/9.webp"
                          pictureorj="/assets/img/Aypinautomat/9.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mt-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/10.webp"
                          pictureorj="/assets/img/Aypinautomat/10.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mt-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/12.webp"
                          pictureorj="/assets/img/Aypinautomat/12.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mt-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/14.webp"
                          pictureorj="/assets/img/Aypinautomat/14.webp"
                        />
                      </div>

                      <div className="col-sm-6 col-lg-4 d-flex mb-3 mt-3 mb-lg-0">
                        <ProductOne
                          picture="/assets/img/Aypinautomat/small/18.webp"
                          pictureorj="/assets/img/Aypinautomat/18.webp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </SRLWrapper>
  );
}

export default Product;
