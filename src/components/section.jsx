import React from "react";
import img2 from "../assets/img.png";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-[25px] justify-center p-[50px]">
      <div className="flex flex-col gap-[5px]">
        <img src={img2} alt={t("cardTitle")} />
        <h3>{t("cardTitle")}</h3>
        <p className="text-[#F17228] bg-[#F1722833] w-[200px] text-center">
          {t("cardDays")}
        </p>
      </div>

      <div className="flex flex-col gap-[5px]">
        <img src={img2} alt={t("cardTitle")} />
        <h3>{t("cardTitle")}</h3>
        <p className="text-[#F17228] bg-[#F1722833] w-[200px] text-center">
          {t("cardDays")}
        </p>
      </div>

      <div className="flex flex-col gap-[5px]">
        <img src={img2} alt={t("cardTitle")} />
        <h3>{t("cardTitle")}</h3>
        <p className="text-[#F17228] bg-[#F1722833] w-[200px] text-center">
          {t("cardDays")}
        </p>
      </div>

      <div className="flex flex-col gap-[5px]">
        <img src={img2} alt={t("cardTitle")} />
        <h3>{t("cardTitle")}</h3>
        <p className="text-[#F17228] bg-[#F1722833] w-[200px] text-center">
          {t("cardDays")}
        </p>
      </div>
    </div>
  );
};

export default Section;
