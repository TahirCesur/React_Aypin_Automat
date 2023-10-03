import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PortfolioOne(props) {
  const { t } = useTranslation();
  const { picture, title, desc, nav, id } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <figure key={id} className="figure">
      <a href={picture}>
        <img
          src={picture}
          className="figure-img img-fluid rounded shadow"
          alt={t(desc)}
        />
      </a>
      <Link to={nav} onClick={scrollToTop}>
        {t(title)}
      </Link>
    </figure>
  );
}

export default PortfolioOne;
