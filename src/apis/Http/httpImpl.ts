import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpImpl {
  get?<T = any, R = AxiosResponse<T>>(url?: string, config?: AxiosRequestConfig<T>): Promise<R>;

  post?<T = any, R = AxiosResponse<T>>(
    url?: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R>;

  put?<T = any, R = AxiosResponse<T>>(
    url?: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R>;

  delete?<T = any, R = AxiosResponse<T>>(url?: string, config?: AxiosRequestConfig<T>): Promise<R>;
}
