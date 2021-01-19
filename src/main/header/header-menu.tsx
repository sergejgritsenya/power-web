import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { HeaderLink } from "./header-link"

export const HeaderMenu: FC = () => {
  const { root } = useStyles()
  return (
    <nav className={root}>
      <HeaderLink label="P.O.W.E.R" link="/"></HeaderLink>
      <HeaderLink label="News" link="/news"></HeaderLink>
      <HeaderLink label="Tournaments" link="/tournaments"></HeaderLink>
      <HeaderLink label="Shop" link="/shop"></HeaderLink>
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
