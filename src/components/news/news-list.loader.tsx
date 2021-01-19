import React, { FC, useEffect, useState } from "react"
import { useAxios } from "../../services"
import { Locker, news_routes } from "../common"
import { NewsList } from "./news-list"
import { TNewsList } from "./types"

export const NewsListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TNewsList | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TNewsList>(news_routes.root)
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <NewsList news={state} />
}
