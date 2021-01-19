type TNewsItem = {
  id: string
  title: string
  publish: boolean
  logo: string | null
  text: string
}

export type TNewsList = TNewsItem[]
