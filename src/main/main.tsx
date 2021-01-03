import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { NotFound } from "./not-found"
import { PageInner } from "./page-inner"

export const AppMain: FC = () => {
  const classes = useStyles()
  return (
    <main>
      <PageInner className={classes.root}>
        {/* {route.routes ? <DataRoutes routes={route.routes} /> : <NotFound />} */}
        <NotFound />
      </PageInner>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 110px - 100px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 231px - 100px)",
    },
  },
}))
