import React from "react";
import Pim from "../Components/portfolio/Pim";
import PageHeader from "../Components/common/PageHeader";
import Spacer4 from "../Components/common/Spacer4";
import { useTranslation } from "react-i18next";
import TopBar from "../Components/common/TopBar";

function PimPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer4 />
      <PageHeader title={t("Özel Üretim Pimler")} />
      <Pim />
    </>
  );
}

export default PimPage;
