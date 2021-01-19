import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAxios } from "../../services"
import { Locker, news_routes } from "../common"
import { News } from "./news"
import { TNews } from "./types"

type NewsProps = {
  news_id: string
}
export const NewsLoader: FC = () => {
  const { news_id } = useParams<NewsProps>()
  const axios = useAxios()
  const [state, setState] = useState<TNews | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TNews>(news_routes.get(news_id))
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <News news={state} />
}
