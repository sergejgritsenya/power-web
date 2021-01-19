import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAxios } from "../../services"
import { Locker, tournament_routes } from "../common"
import { Tournament } from "./tournament"
import { TTournament } from "./types"

export const TournamentLoader: FC = () => {
  const { tournament_id } = useParams<any>()
  const axios = useAxios()
  const [state, setState] = useState<TTournament | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TTournament>(tournament_routes.get(tournament_id))
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <Tournament tournament={state} />
}
