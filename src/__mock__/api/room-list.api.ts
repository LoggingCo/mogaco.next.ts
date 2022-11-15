import { rest } from 'msw';
import { roomChat } from '../data/room.data';
import { RoomListData } from '../data/roomList.data';
import { PoPularCategoryhData } from '../data/search.data';

// get room all list
export const roomGetAllList = rest.get('/api/room/list', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(RoomListData));
});

// get tag room list
export const roomGetTagList = rest.get('/api/room', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(RoomListData));
});

// get popular tag
export const roomGetPopularTag = rest.get('/api/room/popular', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(PoPularCategoryhData));
});
