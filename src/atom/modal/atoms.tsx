import { atom } from 'recoil';

export const editModal = atom<boolean>({
  key: 'editModal',
  default: false,
});
