import React, { FC, useEffect, useState } from "react"
import { tournament_root_routes } from "../../main"
import { useAxios } from "../../services"
import { NoElements } from "../common"
import { TournamentList } from "./tournament-list"
import { TTournamentList } from "./types"

export const TournamentListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TTournamentList[] | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TTournamentList[]>({ url: tournament_root_routes.list })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state || !state.length) {
    return <NoElements />
  }
  return <TournamentList tournaments={state} />
}
