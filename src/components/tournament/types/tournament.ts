export type TTournamentVideo = {
  id: string
  url: string
}

export type TTournamentImage = {
  id: string
  url: string
}
export type TTournament = {
  id: string
  name: string
  logo: string | null
  description: string
  videos: TTournamentVideo[]
  images: TTournamentImage[]
}
