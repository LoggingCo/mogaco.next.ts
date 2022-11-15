import { rest } from 'msw';
import { DirectData } from '../data/direct.data';

// get dm
export const dmChat = rest.get('/api/dm/chat', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(DirectData));
});

// send dm
export const dmSendChat = rest.post('/api/dm/chat', async (req, res, ctx) => {
  let content;
  let receiverId;
  let roomId;
  let createdAt;
  let read;

  await req.json().then((data) => {
    content = data.content;
    receiverId = data.receiverId;
    roomId = data.roomId;
    createdAt = data.createdAt;
    read = data.read;
  });

  const data = {
    content,
    createdAt,
    read,
  };

  return res(ctx.status(200), ctx.json(data));
});

// delete dm
