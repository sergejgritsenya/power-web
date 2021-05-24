import { makeStyles } from "@material-ui/core"
import React, { FC, useContext } from "react"
import { LanguageCtx, localizations, TLanguageCtx } from "../../main"
import { MainLink } from "./main-link"

export const MainMenu: FC = () => {
  const { nav } = useStyles()
  const { i18n } = useContext<TLanguageCtx>(LanguageCtx)
  return (
    <nav className={nav}>
      <MainLink label={localizations.news[i18n]} link="/news" />
      <MainLink label={localizations.tournaments[i18n]} link="/tournaments" />
      <MainLink label={localizations.shop[i18n]} link="/shop" />
    </nav>
  )
}

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "center",
    // marginTop: "180px",
    marginBottom: "32px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}))
