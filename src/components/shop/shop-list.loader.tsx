import React, { FC, useEffect, useState } from "react"
import { shop_root_routes } from "../../main"
import { useAxios } from "../../services"
import { NoElements } from "../common"
import { ShopList } from "./shop-list"
import { TShopList } from "./types"

export const ShopListLoader: FC = () => {
  const axios = useAxios()
  const [state, setState] = useState<TShopList[] | null>(null)
  const load = async () => {
    const res = await axios.post<undefined, TShopList[]>({ url: shop_root_routes.list })
    setState(res)
  }
  useEffect(() => {
    load()
  }, [])

  if (!state || !state.length) {
    return <NoElements />
  }
  return <ShopList shops={state} />
}
