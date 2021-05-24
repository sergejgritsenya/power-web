import React, { FC, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppFooter } from "./footer"
import { AppHeader } from "./header"
import { LanguageCtx, TI18n } from "./i18n"
import { AppMain } from "./main"

export const Container: FC = () => {
  const [i18n, setI18n] = useState<TI18n>(TI18n.en)
  return (
    <LanguageCtx.Provider value={{ i18n, setI18n }}>
      <Router>
        <AppHeader />
        <AppMain />
      </Router>
      <AppFooter />
    </LanguageCtx.Provider>
  )
}
