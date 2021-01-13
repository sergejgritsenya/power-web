import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"

export const NoElements: FC = () => {
  const { root } = useStyles()
  return <h1 className={root}>No elements found :(</h1>
}

const useStyles = makeStyles(() => {
  return {
    root: {
      margin: "auto",
    },
  }
})
