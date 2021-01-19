import { makeStyles, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { Link } from "react-router-dom"

type TMainMenuItemProps = {
  label: string
  link: string
}
export const MainLink: FC<TMainMenuItemProps> = ({ label, link }) => {
  const { menu_link, root, text } = useStyles()
  return (
    <div className={root}>
      <Link to={link} className={menu_link}>
        <Typography className={text} component="div">
          {label}
        </Typography>
      </Link>
    </div>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // height: "100%",
      [theme.breakpoints.only("xs")]: {
        "& + $root": {
          marginTop: "12px",
        },
      },
      [theme.breakpoints.up("md")]: {
        // position: "relative",
        "&:hover": {
          "& $link": {
            color: theme.palette.primary.main,
            textDecoration: "none",
          },
        },
      },
    },
    menu_link: {
      height: "100%",
      padding: "0 8px",
      color: theme.palette.secondary.main,
      display: "flex",
      alignItems: "center",
      // position: "relative",
      [theme.breakpoints.up("md")]: {
        padding: "0 12px 0 24px",
        "&:hover": {
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
      },
    },
    text: {
      color: theme.palette.secondary.main,
      // textAlign: "center",
      fontSize: "35px",
      whiteSpace: "pre-line",
      fontWeight: "bold",
    },
  }
})
