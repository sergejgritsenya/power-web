const routes = {
  tournaments: "/tournaments",
  news: "/news",
  shop: "/shop",
}

export const tournament_root_routes = {
  list: `${routes.tournaments}/list`,
  root: `${routes.tournaments}/:tournament_id`,
}
export const tournament_routes = {
  get: `${tournament_root_routes.root}/get`,
  video: `${tournament_root_routes.root}/video`,
  image: `${tournament_root_routes.root}/image`,
}
export const news_root_routes = {
  list: `${routes.news}/list`,
  root: `${routes.news}/:news_id`,
}
export const news_routes = {
  get: `${news_root_routes.root}/get`,
}
export const shop_root_routes = {
  list: `${routes.shop}/list`,
  root: `${routes.shop}/:shop_id`,
}
export const shop_routes = {
  get: `${shop_root_routes.root}/get`,
  image: `${shop_root_routes.root}/image`,
}
