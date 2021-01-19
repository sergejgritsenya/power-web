import { Grid, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { ImageDialog } from "../common"
import { TTournament } from "./types"

type TTournamentProps = {
  tournament: TTournament
}
export const Tournament: FC<TTournamentProps> = ({ tournament }) => {
  const { container, iframe, logo, root, superRoot, text } = useStyles()

  return (
    <Grid container justify="center" className={superRoot}>
      <Grid item xs={12} md={6} className={root}>
        <img
          src={tournament.logo || "/static/default-img.png"}
          alt="logo"
          className={logo}
        />
      </Grid>
      <Grid item xs={12} md={6} className={root}>
        <div className={text}>{tournament.description}</div>
      </Grid>
      <Grid item xs={12}>
        {tournament.images.length ? (
          <Grid container justify="center" className={container}>
            {tournament.images.map((image) => (
              <Grid item xs={12} md={3} className={root} key={image.id}>
                <ImageDialog url={image.url} />
              </Grid>
            ))}
          </Grid>
        ) : null}
        {tournament.videos.length ? (
          <Grid container justify="center" spacing={5} className={container}>
            {tournament.videos.map((video) => (
              <Grid item xs={12} md={6} key={video.id}>
                <div className={iframe} dangerouslySetInnerHTML={{ __html: video.url }} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "50px",
    marginBottom: "15px",
  },
  iframe: {
    border: `1px solid ${theme.palette.common}`,
    "& iframe": {
      width: "100%",
      height: "400px",
      marginBottom: "-5px",
    },
  },
  logo: {
    width: "290px",
    height: "450px",
  },
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  superRoot: {
    minHeight: "calc(100vh - 110px - 100px)",
    paddingTop: "30px",
    marginBottom: "15px",
  },
  text: {
    color: theme.palette.primary.light,
  },
}))
