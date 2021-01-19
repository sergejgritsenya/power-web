import { makeStyles, Typography } from "@material-ui/core"
import clsx from "clsx"
import React, { FC } from "react"
import { MainMenu } from "./main-menu"

export const MainPage: FC = () => {
  const { content, contentItem, logo, root, text, textFooter, textTitle } = useStyles()
  return (
    <main className={root}>
      <div className={content}>
        <img src="/static/main.jpg" alt="main" className={clsx(contentItem, logo)} />
        <div className={contentItem}>
          <Typography className={clsx(text, textTitle)}>P.O.W.E.R.</Typography>
          <Typography className={text}>
            {"Promotion of Olympic Wrestling \n in European Region"}
          </Typography>
        </div>
      </div>
      <Typography component="div" className={clsx(text, textFooter)}>
        by Classic Sport LLC
      </Typography>
      <MainMenu />
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  logo: {
    marginRight: "134px",
    width: "290px",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: "21px",
    textAlign: "center",
    whiteSpace: "pre-line",
  },
  textTitle: {
    fontSize: "100px",
    lineHeight: "1.55 rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  textFooter: {
    marginTop: "50px",
  },
  content: {
    display: "grid",
    gridGap: "70px",
    gridTemplateColumns: "1fr 1fr",
    paddingTop: "20vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0vh",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
    },
  },
  contentItem: {
    justifySelf: "flex-end",
    "&:last-child": {
      justifySelf: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      justifySelf: "center",
      "&:last-child": {
        justifySelf: "center",
      },
    },
  },
}))
