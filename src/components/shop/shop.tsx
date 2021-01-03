import { Button, Dialog, DialogActions, DialogContent, Grid, makeStyles } from "@material-ui/core"
import React, { FC, useState } from "react"
import { TShop } from "./types"

type TShopProps = {
  shop: TShop
}
export const Shop: FC<TShopProps> = ({ shop }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container justify="center" className={classes.superRoot}>
        <Grid item xs={12} md={6} className={classes.root}>
          <img src={shop.logo || "/static/default-img.png"} className={classes.logo} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.root}>
          <div className={classes.text}>{shop.description}</div>
        </Grid>
        {shop.images.length ? (
          <Grid container justify="center" className={classes.superRoot}>
            {shop.images.map((image) => (
              <Grid item xs={12} md={6} className={classes.root} key={image.id}>
                <ImageDialog url={image.url} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </>
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
        <img src={url} className={classes.image} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <img src={url} alt={"logo"} {...{ loading: "lazy" }} className={classes.fullImg} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} className={classes.button}>
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
  image: {
    width: "200px",
    height: "200px",
  },
  text: {
    color: theme.palette.primary.light,
  },
  button: {
    background: theme.palette.primary.light,
    color: "#fff",
    "&:hover": {
      background: theme.palette.primary.light,
      color: "#fff",
    },
  },
  fullImg: {
    width: "100%",
  },
}))
