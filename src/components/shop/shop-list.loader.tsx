import React, { FC, useEffect, useState } from "react"
import { useAxios } from "../../services"
import { Locker, shop_routes } from "../common"
import { ShopList } from "./shop-list"
import { TShopList } from "./types"

export const ShopListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TShopList | null>(null)

  const load = async () => {
    const res = await axios.makeRequest<TShopList>(shop_routes.root)
    setState(res)
  }

  useEffect(() => {
    load()
  }, [])
  if (!state) {
    return <Locker />
  }

  return <ShopList shops={state} />
}
