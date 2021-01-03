import React, { FC, useEffect, useState } from "react"
import { news_root_routes } from "../../main"
import { useAxios } from "../../services"
import { NoElements } from "../common"
import { NewsList } from "./news-list"
import { TNewsList } from "./types"

export const NewsListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TNewsList[] | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TNewsList[]>({ url: news_root_routes.list })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state || !state.length) {
    return <NoElements />
  }
  return <NewsList news={state} />
}
