import { makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React, { FC } from "react"
import { ChangeLanguage } from "./change-language"
import { HeaderMenu } from "./header-menu"

export const AppHeader: FC = () => {
  const { left, root, size } = useStyles()
  return (
    <>
      <div className={size} />
      <header className={clsx(root, size)}>
        <div className={left}>
          {/* <HeaderLogo /> */}
          <HeaderMenu />
          <ChangeLanguage />
        </div>
      </header>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  left: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  size: {
    height: "100px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "220px",
    },
  },
}))
