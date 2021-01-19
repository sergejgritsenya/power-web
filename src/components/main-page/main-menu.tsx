import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { MainLink } from "./main-link"

export const MainMenu: FC = () => {
  const { nav } = useStyles()
  return (
    <nav className={nav}>
      <MainLink label="News" link="/news" />
      <MainLink label="Tournaments" link="/tournaments" />
      <MainLink label="Shop" link="/shop" />
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
