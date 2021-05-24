import { makeStyles } from "@material-ui/core"
import React, { FC, useContext } from "react"
import { LanguageCtx, localizations, TLanguageCtx } from "../i18n"
import { HeaderLink } from "./header-link"

export const HeaderMenu: FC = () => {
  const { root } = useStyles()
  const { i18n } = useContext<TLanguageCtx>(LanguageCtx)
  return (
    <nav className={root}>
      <HeaderLink label="P.O.W.E.R" link="/"></HeaderLink>
      <HeaderLink label={localizations.news[i18n]} link="/news"></HeaderLink>
      <HeaderLink
        label={localizations.tournaments[i18n]}
        link="/tournaments"
      ></HeaderLink>
      <HeaderLink label={localizations.shop[i18n]} link="/shop"></HeaderLink>
    </nav>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}))
