import { Grid, makeStyles, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { TNewsList } from "./types"

type TNewsListProps = {
  news: TNewsList[]
}
export const NewsList: FC<TNewsListProps> = ({ news }) => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.superRoot}>
      {news.map((item) => (
        <Grid
          item
          component="a"
          href={`/news/${item.id}`}
          key={item.id}
          className={classes.root}
          container
          xs={12}
        >
          <Grid item xs={12} md={3}>
            <img
              src={item.logo || "/static/default-img.png"}
              alt="news"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography className={classes.title}>{item.title}</Typography>
            <Typography className={classes.text}>{item.text}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
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
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: theme.palette.primary.light,
  },
  text: {
    fontSize: "15px",
    color: theme.palette.primary.light,
    overflow: "hidden",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  },
  image: {
    width: "200px",
  },
}))
