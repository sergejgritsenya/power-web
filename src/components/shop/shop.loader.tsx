import React, { FC, useEffect, useState } from "react"
import { shop_routes } from "../../main"
import { useAxios } from "../../services"
import { Shop } from "./shop"
import { TShop } from "./types"

export const ShopLoader: FC = () => {
  const shop_id = ""
  const axios = useAxios()
  const [state, setState] = useState<TShop | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TShop>({ url: `${shop_routes.get}/${shop_id}` })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state) {
    return null
  }
  return <Shop shop={state} />
}
