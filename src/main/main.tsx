import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { Route, Switch } from "react-router-dom"
import { MainPage, NewsListLoader, ShopListLoader, TournamentListLoader } from "../components"
import { NotFound } from "./not-found"
import { PageInner } from "./page-inner"

export const AppMain: FC = () => {
  const classes = useStyles()
  return (
    <main>
      <PageInner className={classes.root}>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/news">
            <NewsListLoader />
          </Route>
          <Route exact path="/tournaments">
            <TournamentListLoader />
          </Route>
          <Route exact path="/shop">
            <ShopListLoader />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* {route.routes ? <DataRoutes routes={route.routes} /> : <NotFound />} */}
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
