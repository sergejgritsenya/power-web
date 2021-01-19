import { Grid, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { ImageDialog } from "../common"
import { TShop } from "./types"

type TShopProps = {
  shop: TShop
}
export const Shop: FC<TShopProps> = ({ shop }) => {
  const { container, logo, root, text } = useStyles()

  return (
    <Grid container justify="center" className={container}>
      <Grid item xs={12} md={6} className={root}>
        <img src={shop.logo || "/static/default-img.png"} alt="shop" className={logo} />
      </Grid>
      <Grid item xs={12} md={6} className={root}>
        <div className={text}>{shop.description}</div>
      </Grid>
      {shop.images.length ? (
        <Grid container justify="center" className={container}>
          {shop.images.map((image) => (
            <Grid item xs={12} md={6} className={root} key={image.id}>
              <ImageDialog url={image.url} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 110px - 100px)",
    paddingTop: "30px",
    marginBottom: "15px",
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
  text: {
    color: theme.palette.primary.light,
  },
}))
