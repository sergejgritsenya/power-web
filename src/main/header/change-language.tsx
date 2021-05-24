import { Button, makeStyles } from "@material-ui/core"
import React, { FC, useContext } from "react"
import { LanguageCtx, TI18n, TLanguageCtx } from "../i18n"

export const ChangeLanguage: FC = () => {
  const { root } = useStyles()
  const { setI18n } = useContext<TLanguageCtx>(LanguageCtx)
  return (
    <>
      <Button variant="text" className={root} onClick={() => setI18n(TI18n.en)}>
        ENG
      </Button>
      <Button variant="text" className={root} onClick={() => setI18n(TI18n.ru)}>
        РУС
      </Button>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },
}))
