import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(option: Options) {
    this.axiosInstance = axios.create({
      baseURL: option.baseUrl,
      params: option.params
    });
  }

  async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options)

      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);

    }
  }

}