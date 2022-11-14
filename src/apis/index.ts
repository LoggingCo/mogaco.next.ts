import AuthApi from './Auth/authApi';
import Http from './Http/http';

// api http
export const baseHttp = new Http({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  tokenActive: false,
});

export const TokenbaseHttp = new Http({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  tokenActive: true,
});
