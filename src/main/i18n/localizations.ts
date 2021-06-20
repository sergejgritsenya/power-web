import { TI18n } from "./types"

type TLocalizationItem = Record<TI18n, string>

type TLocalization = Record<string, TLocalizationItem>

export const localizations: TLocalization = {
  gallery: {
    en: "Gallery",
    ru: "Галерея",
  },
  news: {
    en: "News",
    ru: "Новости",
  },
  tournaments: {
    en: "Tournaments",
    ru: "Турниры",
  },
  shop: {
    en: "Shop",
    ru: "Магазин",
  },
  contactUs: {
    en: "Contact us:",
    ru: "Связаться с нами:",
  },
  shopUnderConstruction: {
    en: "Shop under construction",
    ru: "Раздел в разработке",
  },
  rights: {
    en: "All rights reserved.\nUse and/or distribution of any content without written\nconsent of its respective owner is prohibited.",
    ru: "Все права защищены.\nИспользование и/или распространение\nсодержания сайта без письменного\nсогласия авторов запрещено.",
  },
}
