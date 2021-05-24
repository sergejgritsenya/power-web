import { TI18n } from "./types"

type TLocalizationItem = Record<TI18n, string>

type TLocalization = Record<string, TLocalizationItem>

export const localizations: TLocalization = {
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
}
