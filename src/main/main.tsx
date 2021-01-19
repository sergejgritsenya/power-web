import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { Route, Switch } from "react-router-dom"
import {
  MainPage,
  NewsListLoader,
  NewsLoader,
  ShopListLoader,
  ShopLoader,
  TournamentListLoader,
  TournamentLoader,
} from "../components"
import { NotFound } from "./not-found"

export const AppMain: FC = () => {
  const { root } = useStyles()
  return (
    <main className={root}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/news">
          <NewsListLoader />
        </Route>
        <Route path="/news/:news_id">
          <NewsLoader />
        </Route>
        <Route exact path="/tournaments">
          <TournamentListLoader />
        </Route>
        <Route path="/tournaments/:tournament_id">
          <TournamentLoader />
        </Route>
        <Route exact path="/shop">
          <ShopListLoader />
        </Route>
        <Route path="/shop/:shop_id">
          <ShopLoader />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.light,
    // color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    padding: "0px",
    minHeight: "calc(100vh - 110px - 100px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 231px - 100px)",
    },
  },
}))
