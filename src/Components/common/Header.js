/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar
        id="header"
        className="fixed-top header-inner-pages"
        expand="lg"
        expanded={expanded}
      >
        <Container className="container d-flex align-items-center justify-content-center">
          <Link to="/" className="logo" onClick={handleClick}>
            <img
              src="assets/img/Aypinautomat/aypin 1.webp"
              alt="Aypin Automat Logo"
              className="img-fluid"
              maxWidth={"100%"}
              height={"100%"}
            />
          </Link>
          <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            expanded={expanded}
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClick}
                className="nav-link scrollto active"
              >
                {t("Ana Sayfa")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/aboutus"
                className="nav-link scrollto"
                onClick={handleClick}
              >
                {t("Hakkımızda")}
              </Nav.Link>

              <NavDropdown
                title={t("Ürünlerimiz")}
                id="collasible-nav-dropdown"
                className="nav-link scroolto"
              >
                <NavDropdown.Item as={Link} to="/civata" onClick={handleClick}>
                  {t("Özel Üretim Civatalar")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pim" onClick={handleClick}>
                  {t("Özel Üretim Pimler")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pirinc" onClick={handleClick}>
                  {t("Özel Üretim Pirinç Parçalar")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/burc" onClick={handleClick}>
                  {t("Özel Üretim Burçlar")}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/product"
                className="nav-link scrollto"
                onClick={handleClick}
              >
                {t("Üretim")}
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link scrollto"
                onClick={handleClick}
              >
                {t("İletişim")}
              </Nav.Link>
              <Nav.Link
                href="https://wa.me/905321621647"
                title={t("Bize Whatsapptan Ulaşın")}
                target={"_blank"}
                className="social-links"
              >
                <i className="bx bxl-whatsapp" style={{ fontSize: "24px" }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
