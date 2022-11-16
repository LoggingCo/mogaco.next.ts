import AuthApi from './Auth/authApi';
import Http from './Http/http';

// api http

const mookHttp = new Http({
  baseURL: '/api',
  tokenActive: false,
});

const TokenMookHttp = new Http({
  baseURL: '/api',
  tokenActive: false,
});

const baseHttp = new Http({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  tokenActive: false,
});

const TokenbaseHttp = new Http({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  tokenActive: true,
});

export const AuthService = new AuthApi(mookHttp, TokenMookHttp);
