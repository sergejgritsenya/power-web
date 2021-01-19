type TShopImage = {
  id: string
  url: string
}

export type TShop = {
  id: string
  name: string
  price: string
  description: string
  logo: string | null
  images: TShopImage[]
}
