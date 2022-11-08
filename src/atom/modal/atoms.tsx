import { atom } from 'recoil';

export const editModal = atom<boolean>({
  key: 'editModal',
  default: false,
});

export const fullVideoModal = atom<boolean>({
  key: 'fullVideoModal',
  default: false,
});
