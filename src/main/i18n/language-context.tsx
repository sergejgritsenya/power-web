import React from "react"
import { TI18n, TLanguageCtx } from "./types"

const defaultValue: TLanguageCtx = {
  i18n: TI18n.en,
  setI18n: (_i18n: TI18n) => {},
}

export const LanguageCtx = React.createContext<TLanguageCtx>(defaultValue)
