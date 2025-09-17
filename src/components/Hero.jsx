import React from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import img from "../assets/food.png"

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
      <div className="container w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-white text-lg mb-8">
            {t("subtitle")}
          </p>
          <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center overflow-hidden">
            <div className="flex w-full md:w-auto">
              <button className="px-4 py-2 text-orange-500 font-medium border-b-2 md:border-b-0 md:border-r-2 border-orange-500">
                {t("delivery")}
              </button>
              <button className="px-4 py-2 text-gray-600 font-medium">
                {t("pickup")}
              </button>
            </div>
            <div className="flex items-center w-full md:w-auto flex-1 px-4 py-2">
              <span className="text-red-500 mr-2">📍</span>
              <input
                type="text"
                placeholder={t("enterAddress")}
                className="flex-1 outline-none"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 flex items-center gap-2 font-medium w-[200px]">
              <Search />
              {t("findFood")}
            </button>
          </div>
        </div>
        <div className="flex justify-center m-[30px]">
          <img
            src={img}
            alt="Food"
            className="relative top-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
