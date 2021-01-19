import { Button, makeStyles, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { Link } from "react-router-dom"

export const HeaderLogo: FC = () => {
  const { root, text } = useStyles()
  return (
    <Button component={Link} variant="text" color="inherit" to="/" className={root}>
      <Typography className={text} component="div">
        P.O.W.E.R.
      </Typography>
    </Button>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: "106px",
    },
  },
  img: {
    height: "12px",
    [theme.breakpoints.up("sm")]: {
      height: "20px",
    },
  },
  text: {
    color: theme.palette.secondary.main,
    ...theme.typography.subtitle1,
    [theme.breakpoints.up("md")]: {
      ...theme.typography.h5,
    },
  },
}))
