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

      // Section2 texts
      section2: {
        title: "How does it work",
        steps: [
          {
            title: "Select location",
            desc: "Choose the location where your food will be delivered."
          },
          {
            title: "Choose order",
            desc: "Check over hundreds of menus to pick your favorite food."
          },
          {
            title: "Pay advanced",
            desc: "It's quick, safe, and simple. Select several methods of payment."
          },
          {
            title: "Enjoy meals",
            desc: "Food is made and delivered directly to your home."
          }
        ]
      }
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

      // Section2 texts
      section2: {
        title: "Bu qanday ishlaydi",
        steps: [
          {
            title: "Joyni tanlang",
            desc: "Ovqat yetkazib beriladigan joyni tanlang."
          },
          {
            title: "Buyurtma tanlang",
            desc: "Sevimli ovqatingizni tanlash uchun yuzlab menyularni ko‘rib chiqing."
          },
          {
            title: "Oldindan to‘lov qiling",
            desc: "Bu tez, xavfsiz va oddiy. To‘lov usullaridan birini tanlang."
          },
          {
            title: "Ovqatdan rohatlaning",
            desc: "Ovqat tayyorlanadi va to‘g‘ridan-to‘g‘ri uyingizga yetkaziladi."
          }
        ]
      }
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

      // Section2 texts
      section2: {
        title: "Как это работает",
        steps: [
          {
            title: "Выберите местоположение",
            desc: "Выберите место, куда будет доставлена ваша еда."
          },
          {
            title: "Выберите заказ",
            desc: "Просмотрите сотни меню, чтобы выбрать любимую еду."
          },
          {
            title: "Оплатите заранее",
            desc: "Это быстро, безопасно и просто. Выберите несколько способов оплаты."
          },
          {
            title: "Наслаждайтесь едой",
            desc: "Еда готовится и доставляется прямо к вам домой."
          }
        ]
      }
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
