import { AxiosResponse } from 'axios';

export type AuthApiParamType = {
  paramsSerializer?: any;
  params?: any;
  data?: any;
  token?: string;
};

export interface AuthAptiImpl {
  login: ({ data }: AuthApiParamType) => Promise<AxiosResponse<any>>;
  logout: () => Promise<AxiosResponse<any>>;
  signup: ({ data }: AuthApiParamType) => Promise<AxiosResponse<any>>;
  jwtrefresh: ({ token }: AuthApiParamType) => Promise<AxiosResponse<any>>;
}
