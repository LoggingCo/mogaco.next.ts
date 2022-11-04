import { atom } from 'recoil';

export const editModal = atom<[]>({
  key: 'roomUserList',
  default: [],
});
