type TMedia = {
  id: string
  url: string
}

export type TTournament = {
  id: string
  name: string
  logo: string | null
  description: string
  videos: TMedia[]
  images: TMedia[]
}
