import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
} from "@material-ui/core"
import React, { FC, useState } from "react"

type TImageDialogProps = {
  url: string
}
export const ImageDialog: FC<TImageDialogProps> = ({ url }) => {
  const { button, fullImg, image } = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <img src={url} alt="tournament" className={image} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <img src={url} alt="logo" {...{ loading: "lazy" }} className={fullImg} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} className={button} color="default">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
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
  image: {
    width: "200px",
    height: "200px",
  },
}))
