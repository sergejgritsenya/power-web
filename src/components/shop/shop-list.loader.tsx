// import React, { FC, useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core"
import React, { FC, useContext } from "react"
import { LanguageCtx, localizations, TLanguageCtx } from "../../main"
// import { useAxios } from "../../services"
// import { Locker, shop_routes } from "../common"
// import { ShopList } from "./shop-list"
// import { TShopList } from "./types"

// export const ShopListLoader: FC = () => {
//   const axios = useAxios()
//   const [state, setState] = useState<TShopList | null>(null)

//   const load = async () => {
//     const res = await axios.makeRequest<TShopList>(shop_routes.root)
//     setState(res)
//   }

//   useEffect(() => {
//     load()
//   }, [])
//   if (!state) {
//     return <Locker />
//   }

//   return <ShopList shops={state} />
// }
export const ShopListLoader: FC = () => {
  const { i18n } = useContext<TLanguageCtx>(LanguageCtx)
  const { root } = useStyles()
  return <h1 className={root}>{localizations.shopUnderConstruction[i18n]}</h1>
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
  },
}))
