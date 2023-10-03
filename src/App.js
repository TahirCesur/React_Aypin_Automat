/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import CustomRoutes from "./router/CustomRoutes";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes("tr")) {
      i18n.changeLanguage("tr"); // Tarayıcı dilini Türkçe olarak algıladığında dil ayarınızı güncelleyin
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <BrowserRouter>
        <Header changeLanguage={changeLanguage} />
        <CustomRoutes changeLanguage={changeLanguage} />
        <Footer changeLanguage={changeLanguage} />
      </BrowserRouter>
    </>
  );
}

export default App;
