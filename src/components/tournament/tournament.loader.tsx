import React, { FC, useEffect, useState } from "react"
import { tournament_routes } from "../../main"
import { useAxios } from "../../services"
import { Tournament } from "./tournament"
import { TTournament } from "./types"

export const TournamentLoader: FC = ({}) => {
  const tournament_id = ""
  const axios = useAxios()
  const [state, setState] = useState<TTournament | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TTournament>({
      url: `${tournament_routes.get}/${tournament_id}`,
    })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state) {
    return null
  }
  return <Tournament tournament={state} />
}
