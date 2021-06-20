import { Grid, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { ImageDialog, NoElements } from "../common"
import { TGalleryList } from "./types"

type TNewsListProps = {
  gallery: TGalleryList
}
export const GalleryList: FC<TNewsListProps> = ({ gallery }) => {
  const { root, container } = useStyles()

  if (!gallery.length) {
    return <NoElements />
  }

  return (
    <Grid container justify="center" className={container}>
      {gallery.map((item) => (
        <Grid item xs={12} md={3}>
          <ImageDialog url={item.url} />
        </Grid>
      ))}
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
    width: "200px",
  },
}))
