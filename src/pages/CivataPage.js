import React from "react";
import Civata from "../Components/portfolio/Civata";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import TopBar from "../Components/common/TopBar";
import Spacer4 from "../Components/common/Spacer4";

function CivataPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar/>
      <Spacer4/>
      <PageHeader title={t("Özel Üretim Civatalar")} />
      <Civata />
    </>
  );
}

export default CivataPage;
