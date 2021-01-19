import { makeStyles, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { Link } from "react-router-dom"

type THeaderMenuItemProps = {
  label: string
  link: string
}
export const HeaderLink: FC<THeaderMenuItemProps> = ({ label, link }) => {
  const { header_link, root, text } = useStyles()
  return (
    <div className={root}>
      <Link to={link} className={header_link}>
        <Typography className={text} component="div">
          {label}
        </Typography>
      </Link>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      "& + $root": {
        marginTop: "12px",
      },
    },
    [theme.breakpoints.up("md")]: {
      position: "relative",
      "&:hover": {
        "& $link": {
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
      },
    },
  },
  header_link: {
    padding: "0 8px",
    color: theme.palette.secondary.main,
    display: "flex",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: "0 12px 0 24px",
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
  },
  text: {
    ...theme.typography.h5,
  },
}))
