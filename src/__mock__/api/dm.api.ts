import { rest } from 'msw';
import { userData } from '../data/user.data';

// get dm chatList
export const dmChat = rest.get('/api/dm/chat', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userData));
});

// send dm ChatList
export const dmSendChat = rest.post('/api/dm/chat', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userData));
});
