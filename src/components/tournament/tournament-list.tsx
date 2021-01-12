import { Grid, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { TTournamentList } from "./types"

type TTournamentListProps = {
  tournaments: TTournamentList[]
}
export const TournamentList: FC<TTournamentListProps> = ({ tournaments }) => {
  const classes = useStyles()
  return (
    <Grid container justify="center" spacing={4} className={classes.superRoot}>
      {tournaments.map((item) => (
        <Grid
          item
          xs={12}
          md={3}
          key={item.id}
          className={classes.root}
          component="a"
          href={`/tournaments/${item.id}`}
        >
          <img
            src={item.logo || "/static/default-img.png"}
            alt="tournament"
            className={classes.image}
          />
        </Grid>
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((_theme) => ({
  superRoot: {
    minHeight: "calc(100vh - 110px - 100px)",
    paddingTop: "30px",
    marginBottom: "15px",
  },
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  image: {
    width: "290px",
    height: "450px",
  },
}))
