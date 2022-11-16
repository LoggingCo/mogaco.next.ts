import { AxiosResponse } from 'axios';
import { AuthApiParamType, AuthAptiImpl } from './autImpl';

class AuthApi implements AuthAptiImpl {
  baseHttp: any;
  tokenHttp: any;
  private path = '/user';

  constructor(http: any, tokenHttp: any) {
    this.baseHttp = http;
    this.tokenHttp = tokenHttp;
  }

  login({ data }: AuthApiParamType): Promise<AxiosResponse<any>> {
    console.log(this.baseHttp);
    return this.baseHttp.post(this.path + '/login', data);
  }

  logout(): Promise<AxiosResponse<any>> {
    return this.tokenHttp.post(this.path + '/logout');
  }

  signup({ data }: AuthApiParamType): Promise<AxiosResponse<any>> {
    return this.baseHttp.post(this.path + '/signup', data);
  }

  jwtrefresh({ token }: AuthApiParamType): Promise<AxiosResponse<any>> {
    return this.tokenHttp.post(this.path + '/jwtrefresh', token);
  }
}
export default AuthApi;
