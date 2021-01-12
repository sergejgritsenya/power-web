import { Button, Dialog, DialogActions, DialogContent, Grid, makeStyles } from "@material-ui/core"
import React, { FC, useState } from "react"
import { TTournament } from "./types"

type TTournamentProps = {
  tournament: TTournament
}
export const Tournament: FC<TTournamentProps> = ({ tournament }) => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.superRoot}>
      <Grid item xs={12} md={6} className={classes.root}>
        <img
          src={tournament.logo || "/static/default-img.png"}
          alt="logo"
          className={classes.logo}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.root}>
        <div className={classes.text}>{tournament.description}</div>
      </Grid>
      <Grid item xs={12}>
        {tournament.images.length ? (
          <Grid container justify="center" className={classes.container}>
            {tournament.images.map((image) => (
              <Grid item xs={12} md={3} className={classes.root} key={image.id}>
                <ImageDialog url={image.url} />
              </Grid>
            ))}
          </Grid>
        ) : null}
        {tournament.videos.length ? (
          <Grid container justify="center" spacing={5} className={classes.container}>
            {tournament.videos.map((video) => (
              <Grid item xs={12} md={6} key={video.id}>
                <div className={classes.iframe} dangerouslySetInnerHTML={{ __html: video.url }} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  )
}

type TImageDialogProps = {
  url: string
}
const ImageDialog: FC<TImageDialogProps> = (props) => {
  const { url } = props
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles()
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <img src={url} alt="tournament" className={classes.image} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <img src={url} alt="logo" {...{ loading: "lazy" }} className={classes.fullImg} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} className={classes.button} color="default">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  superRoot: {
    minHeight: "calc(100vh - 110px - 100px)",
    paddingTop: "30px",
    marginBottom: "15px",
  },
  container: {
    paddingTop: "50px",
    marginBottom: "15px",
  },
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  logo: {
    width: "290px",
    height: "450px",
  },
  button: {
    background: theme.palette.primary.light,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.light,
      color: "#fff",
    },
  },
  image: {
    width: "200px",
    height: "200px",
  },
  text: {
    color: theme.palette.primary.light,
  },
  fullImg: {
    width: "100%",
  },
  iframe: {
    border: `1px solid ${theme.palette.common}`,
    "& iframe": {
      width: "100%",
      height: "400px",
      marginBottom: "-5px",
    },
  },
}))
