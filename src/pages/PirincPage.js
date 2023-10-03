import React from "react";
import Pirinc from "../Components/portfolio/Pirinc";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import TopBar from "../Components/common/TopBar";
import Spacer4 from "../Components/common/Spacer4";

function PirincPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer4 />
      <PageHeader title={t("Özel Üretim Pirinç Parçalar")} />
      <Pirinc />
    </>
  );
}

export default PirincPage;
