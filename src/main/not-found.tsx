import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

export const NotFound: FC = () => {
  const { root } = useStyles()
  return <h1 className={root}>404 page not found</h1>
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
  },
}))
