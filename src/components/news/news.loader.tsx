import React, { FC, useEffect, useState } from "react"
import { news_routes } from "../../main"
import { useAxios } from "../../services"
import { News } from "./news"
import { TNews } from "./types"

export const NewsLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TNews | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TNews>({ url: news_routes.get })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state) {
    return null
  }
  return <News news={state} />
}
