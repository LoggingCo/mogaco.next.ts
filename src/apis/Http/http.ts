import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  ParamsSerializerOptions,
} from 'axios';
import { HttpImpl } from './httpImpl';
import qs from 'qs';
import TokenRepository from '@/repository/TokenRepository';

// types
type baseApiConstructorType = {
  baseURL?: string | undefined;
  tokenActive?: boolean | undefined;
};

// class
class Http implements HttpImpl {
  axios: AxiosInstance;
  tokenActive: boolean | undefined;

  constructor({ baseURL, tokenActive }: baseApiConstructorType) {
    this.axios = axios.create({
      baseURL: baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // paramsSerializer: (params: any) => {
      //   return qs.stringify(params, { arrayFormat: 'repeat' }) as ParamsSerializerOptions;
      // },
    });
    this.tokenActive = tokenActive;
  }

  public http() {
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: any) => {
        const originalRequest = error.config;
        if (error.response.data === 'jwt expired' && !originalRequest._retry) {
          // const refreshToken = ReactCookies.load('refreshToken');
          // if (!refreshToken) {
          //   alert('세션이 만료되어 다시 로그인이 필요합니다.');
          //   TokenRepository.removeToken();
          //   window.location.href = '/';
          //   return;
          // }

          try {
            // const NEW_ACCESS_TOKEN = await AuthService.jwtrefresh(refreshToken);
            // TokenRepository.setToken(NEW_ACCESS_TOKEN.data.accessToken);
            // originalRequest.headers.Authorization = `Bearer ${NEW_ACCESS_TOKEN.data.data}`;
            // originalRequest._retry = true;
            return;
          } catch (err) {
            console.error(err);
          }
        }
      },
    );

    this.axios.interceptors.request.use(
      (config: AxiosRequestConfig<any>) => {
        if (this.tokenActive) {
          const token = TokenRepository.getToken();
          if (!token) return config;
          config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
    return this.axios;
  }

  public async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return await this.http().get(url, { ...config });
  }

  public async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return await this.http().post(url, data, { ...config });
  }

  public async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return await this.http().put(url, data, { ...config });
  }

  public async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    return await this.http().delete(url, { ...config });
  }
}
export default Http;
