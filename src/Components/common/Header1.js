/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header1() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="main-header sticky-top fixed-top">
        <div
          className="topbar fixed-top sticky-top"
          style={{ padding: "10px" }}
        >
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <Button
                  style={{
                    padding: "3px 7px 3px 7px",
                    fontSize: "13px",
                  }}
                  onClick={() => changeLanguage("tr")}
                >
                  TR
                </Button>
                &nbsp;
                <Button
                  style={{
                    padding: "3px 7px 3px 7px",
                    fontSize: "13px",
                  }}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="main-menu pt-2"
          expanded={expanded}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="main-menu__logo" onClick={handleClick}>
                <img
                  src="assets/img/Aypinautomat/aypin 1.webp"
                  width="250"
                  height="94"
                  alt="BKB"
                />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              onClick={toggleNav}
              aria-controls="basic-navbar-nav"
            />
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
                  {t("ANASAYFA")}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/aboutus"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("HAKKIMIZDA")}
                </Nav.Link>

                <NavDropdown
                  title={t("ÜRÜNLERİMİZ")}
                  id="collasible-nav-dropdown"
                  className="nav-link scroolto"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/productdetails"
                    onClick={handleClick}
                  >
                    {t("ürün 1")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/productdetails"
                    onClick={handleClick}
                  >
                    {t("ürün 2")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/productdetails"
                    onClick={handleClick}
                  >
                    {t("ürün 3")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/productdetails"
                    onClick={handleClick}
                  >
                    {t("ürün 4")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/product"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("ÜRETİM")}
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/productsimilar"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("BENZER")}
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contactus"
                  className="nav-link scrollto"
                  onClick={handleClick}
                >
                  {t("İLETİŞİM")}
                </Nav.Link>
                {/* <Nav.Link
                  href="https://wa.me/905321621647"
                  title={t("Bize Whatsapptan Ulaşın")}
                  target={"_blank"}
                  className="social-links"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "24px" }}
                  ></i>
                </Nav.Link> */}
              </Nav>
              <div class="main-menu__right">
                <a href="tel:+02242116266" class="main-menu__phone">
                  <i class="icon-telephone"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100094870608591"
                  target="_blank"
                  class="main-menu__phone"
                >
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header1;
