/* eslint-disable no-unused-vars */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import data from "../../data/product.json";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import PortfolioOne from "./PortfolioOne";
import Spacer3 from "../common/Spacer3";
import i18n from "../../i18n";

function Portfolios() {
  const { t } = useTranslation();
  return (
    <SRLWrapper>
      <section
        id="portfolio"
        className="portfolio"
        style={{ marginTop: "5rem", padding: "0rem 1.5rem 1.5rem 1.5rem" }}
      >
        <Spacer3 />
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2>{t("ÜRÜNLERİMİZ")}</h2>
          </div>

          <Row>
            {data.map((product) => {
              const { picture, nav, id } = product;
              const title = t(product.title);
              const desc = t(product.desc);

              return (
                <Col md={3} key={id} className="text-center mb-5">
                  <PortfolioOne
                    picture={picture}
                    title={title}
                    desc={desc}
                    nav={nav}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </SRLWrapper>
  );
}

export default Portfolios;
