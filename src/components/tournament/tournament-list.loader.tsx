import React, { FC, useEffect, useState } from "react"
import { useAxios } from "../../services"
import { Locker, tournament_routes } from "../common"
import { TournamentList } from "./tournament-list"
import { TTournamentList } from "./types"

export const TournamentListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TTournamentList | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TTournamentList>(tournament_routes.root)
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <TournamentList tournaments={state} />
}
