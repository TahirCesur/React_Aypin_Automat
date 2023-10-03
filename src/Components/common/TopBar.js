/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="topbar fixed-top header-inner-pages">
      <Container>
        <Button
          onClick={() => {
            changeLanguage("tr");
          }}
        >
          {t("TR")}&nbsp;
          <img
            src="/assets/img/TR Bayragi.webp"
            alt="Tr"
            width="20"
            height="17"
          />
        </Button>
        &nbsp;&nbsp;
        <Button
          onClick={() => {
            changeLanguage("en");
          }}
        >
          {t("EN")}&nbsp;
          <img
            src="/assets/img/EN Bayragi.webp"
            alt="En"
            width="20"
            height="17"
          />
        </Button>
      </Container>
    </div>
  );
};

export default TopBar;

//* d-none d-md-inline yapma nedenimiz küçük ekranda
//* kaybolsunlar diye ve block olursa aşağı iner diye inline yaptık

//? d-none d-md-block yapma nedenimiz küçük ekranda kaybolsunlar diye yapmış olduk...
