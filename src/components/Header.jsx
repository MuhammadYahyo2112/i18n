import React from "react";
import logo from "../assets/img.svg";
import { Search, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-white py-4">
      <div className="container max-w-[100%] mx-auto w-[85%]">
        <nav className="flex justify-between items-center">
          <img src={logo} alt="Logo" />
          <div className="flex gap-6 items-center">
            <select
              className="text-black"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">{t("english")}</option>
              <option value="ru">{t("russian")}</option>
              <option value="uz">{t("uzbek")}</option>
            </select>

            <button className="btn btn-warning text-white flex gap-1 items-center">
              <Search />
              <p>{t("searchFood")}</p>
            </button>

            <button className="btn btn-warning text-white flex gap-1 items-center">
              <User />
              {t("login")}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
