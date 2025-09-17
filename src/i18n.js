// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title: "Are you starving?",
      subtitle: "Within a few clicks, find meals that are accessible near you",
      delivery: "Delivery",
      pickup: "Pickup",
      search: "Enter your address",
      find: "Find Food",
      login: "Login",

      // Section texts
      cardTitle: "Greys Vage",
      cardDays: "6 Days Remaining",
    },
  },
  uz: {
    translation: {
      title: "Och qolib ketdingizmi?",
      subtitle: "Bir necha soniyada yaqin atrofdagi taomlarni toping",
      delivery: "Yetkazib berish",
      pickup: "Olib ketish",
      search: "Manzilingizni kiriting",
      find: "Taom topish",
      login: "Kirish",

      // Section texts
      cardTitle: "Greys Vage",
      cardDays: "6 kun qoldi",
    },
  },
  ru: {
    translation: {
      title: "Вы голодны?",
      subtitle: "Всего за пару кликов найдите еду рядом с вами",
      delivery: "Доставка",
      pickup: "Самовывоз",
      search: "Введите ваш адрес",
      find: "Найти еду",
      login: "Войти",

      // Section texts
      cardTitle: "Грейс Ваг",
      cardDays: "Осталось 6 дней",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
