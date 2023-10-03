import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import PortfoliosPage from "../pages/PortfoliosPage";
import ProductPage from "../pages/ProductPage";
import CivataPage from "../pages/CivataPage";
import PimPage from "../pages/PimPage";
import BurcPage from "../pages/BurcPage";
import PirincPage from "../pages/PirincPage";
import TopBarPage from "../pages/TopBarPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/TopBar" element={<TopBarPage />} />
      <Route exact path="/Pirinc" element={<PirincPage />} />
      <Route exact path="/Burc" element={<BurcPage />} />
      <Route path="/Pim" element={<PimPage />} />
      <Route exact path="/Civata" element={<CivataPage />} />
      <Route exact path="/Product" element={<ProductPage />} />
      <Route exact path="/Portfolio" element={<PortfolioPage />} />
      <Route exact path="/Portfolios" element={<PortfoliosPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
