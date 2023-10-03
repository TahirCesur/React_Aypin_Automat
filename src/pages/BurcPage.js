import React from "react";
import { useTranslation } from "react-i18next";
import Burc from "../Components/portfolio/Burc";
import PageHeader from "../Components/common/PageHeader";

import TopBar from "../Components/common/TopBar";
import Spacer4 from "../Components/common/Spacer4";

function BurcPage() {
  const { t } = useTranslation();

  return (
    <>
      <TopBar />
      <Spacer4 />
      <PageHeader title={t("Özel Üretim Burçlar")} />
      <Burc />
    </>
  );
}

export default BurcPage;
