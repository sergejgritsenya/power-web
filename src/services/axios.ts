import axios, { AxiosInstance } from "axios"

class AxiosService {
  private axios: AxiosInstance
  private baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3088/api"
  private static instance: AxiosService

  private constructor() {
    this.axios = axios.create({ baseURL: this.baseUrl })
  }

  public static init(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService()
    }
    return AxiosService.instance
  }

  public async makeRequest<T>(url: string): Promise<T> {
    const res = await this.axios(url)
    return res.data
  }
}

export const useAxios = () => AxiosService.init()
