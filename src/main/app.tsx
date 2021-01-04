import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { SnackbarProvider } from "notistack"
import React, { FC, useEffect, useRef } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { useSnack } from "../services"
import { AppFooter } from "./footer"
import { AppHeader } from "./header"
import { AppMain } from "./main"
import { getTheme } from "./theme"

export const App: FC = () => {
  const ref = useRef<any>()
  const snackService = useSnack()
  useEffect(() => {
    snackService.enqueueSnackbar = ref.current.enqueueSnackbar
    snackService.closeSnackbar = ref.current.closeSnackbar
  }, [])
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        ref={ref}
      >
        <Router>
          <AppHeader />
          <AppMain />
          <AppFooter />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
