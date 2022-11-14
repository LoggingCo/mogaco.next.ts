import { atom } from 'recoil';

export const IsAuth = atom<boolean>({
  key: 'isAuth',
  default: false,
});
