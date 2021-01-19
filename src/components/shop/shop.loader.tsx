import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAxios } from "../../services"
import { Locker, shop_routes } from "../common"
import { Shop } from "./shop"
import { TShop } from "./types"

export const ShopLoader: FC = () => {
  const { shop_id } = useParams<any>()
  const axios = useAxios()
  const [state, setState] = useState<TShop | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TShop>(shop_routes.get(shop_id))
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <Shop shop={state} />
}
