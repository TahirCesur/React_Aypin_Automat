import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  return (
    <div className="page-header">
      <Container fluid>
        <Row>
          <Col>
            <section id="breadcrumbs" className="breadcrumbs">
              <div className="container">
                <h1>{props.title}</h1>
                <ol className="text-center">
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                      {t("Anasayfa")}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t("Ürünlerimiz")}</Breadcrumb.Item>
                  </Breadcrumb>
                </ol>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageHeader;
