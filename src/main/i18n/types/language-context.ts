import { TI18n } from "./i18n"

export type TLanguageCtx = {
  i18n: TI18n
  setI18n: (i18n: TI18n) => void
}
