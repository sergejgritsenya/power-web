import axios, { AxiosInstance } from "axios"
import { TAxiosRequest } from "./types"

class AxiosService {
  private axios: AxiosInstance
  private static instance: AxiosService
  private baseUrl = process.env.API_URL || "http://localhost:3088"
  private constructor() {
    this.axios = axios.create({ baseURL: this.baseUrl })
  }
  public static init(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService()
    }
    return AxiosService.instance
  }
  public post = async <T, K>(props: TAxiosRequest<T>): Promise<K> => {
    const { data } = await this.axios.post<K>(props.url, props.data)
    return data
  }
}

export const useAxios = () => AxiosService.init()
