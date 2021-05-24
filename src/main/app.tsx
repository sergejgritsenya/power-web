import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { SnackbarProvider } from "notistack"
import React, { FC } from "react"
import { Container } from "./container"
import { getTheme } from "./theme"

export const App: FC = () => (
  <ThemeProvider theme={getTheme()}>
    <CssBaseline />
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Container />
    </SnackbarProvider>
  </ThemeProvider>
)
