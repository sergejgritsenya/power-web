import { Grid, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { TNews } from "./types"

type TNewsProps = {
  news: TNews
}
export const News: FC<TNewsProps> = ({ news }) => {
  const { logo, root, container, text } = useStyles()
  return (
    <Grid container justify="center" spacing={4} className={container}>
      <Grid item xs={12} md={6} className={root}>
        <img src={news.logo || "/static/default-img.png"} alt="news" className={logo} />
      </Grid>
      <Grid item xs={12} md={6} className={root}>
        <div className={text}>
          {news.text}
          {news.tournament_id ? (
            <div>
              <a href={`/tournaments/${news.tournament_id}`}>{"More info"}</a>
            </div>
          ) : null}
        </div>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
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
  logo: {
    width: "100%",
    // objectFit: "cover",
    height: "100%",
  },
  text: {
    fontSize: "20px",
    color: theme.palette.primary.light,
  },
}))
