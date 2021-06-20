import { makeStyles, Typography } from "@material-ui/core"
import YouTubeIcon from "@material-ui/icons/YouTube"
import clsx from "clsx"
import React, { FC, useContext } from "react"
import { LanguageCtx, localizations, TLanguageCtx } from "./i18n"

export const AppFooter: FC = () => {
  const { footerContent, footerItem, footerItemIcon, root, stub, text, youtubeIcon } =
    useStyles()
  const { i18n } = useContext<TLanguageCtx>(LanguageCtx)
  const yearNow = new Date().getFullYear()
  return (
    <>
      <div className={stub} />
      <footer className={clsx(root, stub)}>
        <div className={footerContent}>
          <div className={footerItem}>
            <Typography className={text}>{localizations.contactUs[i18n]}</Typography>
            <Typography
              className={text}
              component="a"
              href={"mailto:pilipenko.wrestling@gmail.com"}
            >
              pilipenko.wrestling@gmail.com
            </Typography>
            <Typography component="a" href="tel:+1 718 509 5655" className={text}>
              +1 718 509 5655
            </Typography>
          </div>
          <a
            className={clsx(footerItem, footerItemIcon)}
            href={"https://www.youtube.com/channel/UCOE3vmiJp1pUxCxCPOYkkQw"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon className={youtubeIcon} />
          </a>
          <div className={footerItem}>
            <Typography className={text}>
              © {yearNow}. {localizations.rights[i18n]}
            </Typography>
          </div>
        </div>
      </footer>
    </>
  )
}

const youtubeSize: number = 57
const youtubeSizeMobile: number = 45
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      position: "relative",
    },
  },
  stub: {
    height: "110px",
    [theme.breakpoints.down("sm")]: {
      height: "231px",
    },
    [theme.breakpoints.down(400)]: {
      height: "250px",
    },
    [theme.breakpoints.down(390)]: {
      height: "260px",
    },
  },
  root: {
    background: theme.palette.primary.dark,
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "15px 0",
  },
  footerItem: {
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      "& + $footerItem": {
        marginTop: "12px",
      },
    },
  },
  footerItemIcon: {
    justifyContent: "center",
  },
  youtubeIcon: {
    color: theme.palette.secondary.main,
    width: youtubeSize,
    height: youtubeSize,
    [theme.breakpoints.down("md")]: {
      width: youtubeSizeMobile,
      height: youtubeSizeMobile,
    },
  },
  text: {
    color: theme.palette.secondary.main,
    fontSize: "15px",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
}))
