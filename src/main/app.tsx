import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { SnackbarProvider } from "notistack"
import React, { FC } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppFooter } from "./footer"
import { AppHeader } from "./header"
import { AppMain } from "./main"
import { getTheme } from "./theme"

export const App: FC = () => (
  <ThemeProvider theme={getTheme()}>
    <CssBaseline />
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
      <Router>
        <AppHeader />
        <AppMain />
      </Router>
      <AppFooter />
    </SnackbarProvider>
  </ThemeProvider>
)
