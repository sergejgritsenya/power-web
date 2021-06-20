import React, { FC, useEffect, useState } from "react"
import { useAxios } from "../../services"
import { gallery_routes, Locker } from "../common"
import { GalleryList } from "./gallery-list"
import { TGalleryList } from "./types"

export const GalleryListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TGalleryList | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TGalleryList>(gallery_routes.root)
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <GalleryList gallery={state} />
}
