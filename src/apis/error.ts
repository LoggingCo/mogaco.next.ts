import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiError<T = any> extends Error {
  config?: AxiosRequestConfig<any>;
  code?: string | undefined;
  request?: any;
  response?: AxiosResponse<T, any> | undefined;
  isAxiosError!: boolean;
  status: number | undefined;
  toJSON!: () => object;

  constructor(message: string, error: AxiosError<T>) {
    super(message ?? error.message, error);
    this.message = message ?? error.message;
    this.config = error.config;
    this.code = error.code;
    this.request = error.request;
    this.response = error.response;
    this.isAxiosError = error.isAxiosError;
    this.status = error.status;
    this.toJSON = error.toJSON;

    let name = 'ApiError';

    if (this.status === 400) {
      name = 'BadRequest';
    }
    if (this.status === 401) {
      name = 'Unauthorized';
    }
    if (this.status === 403) {
      name = 'Forbidden';
      location.href = '/403';
    }
    if (this.status === 404) {
      name = 'NotFound';
      location.href = '/404';
    }
    if (this.status === 500) {
      name = 'InternalServerError';
      location.href = '/500';
    }

    this.name = name;
    this.stack = error.stack;
  }
}
export default ApiError;
