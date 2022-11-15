import { rest } from 'msw';
import { roomChat, roomData } from '../data/room.data';

// post room
export const roomPostRoom = rest.post('/api/room', async (req, res, ctx) => {
  let title;
  let description;
  let category;
  let maxMember;
  let password;

  await req.json().then((data) => {
    title = data.title;
    description = data.description;
    category = data.category;
    maxMember = data.maxMember;
    password = data.password;
  });

  const data = {
    id: Math.floor(Math.random() * 1000),
    title,
    description,
    category,
    maxMember,
    currentMember: 3,
    startDate: '2021-08-01',
    duringDate: 128,
    totalhour: '215d 12h',
    isRecruiting: true,
    private: password ? true : false,
  };

  return res(ctx.status(200), ctx.json(data));
});

// delete room
export const roomDeleteRoom = rest.delete('/api/room', async (req, res, ctx) => {
  let roomId;
  await req.json().then((data) => {
    roomId = data.roomId;
  });

  return res(ctx.status(200), ctx.json({ roomId }));
});

// update rooms
export const roomPatchRoom = rest.patch('/api/room', async (req, res, ctx) => {
  let title;
  let description;
  let category;
  let maxMember;
  let password;

  await req.json().then((data) => {
    title = data.title;
    description = data.description;
    category = data.category;
    maxMember = data.maxMember;
    password = data.password;
  });

  const data = {
    id: Math.floor(Math.random() * 1000),
    title,
    description,
    category,
    maxMember,
    currentMember: 3,
    startDate: '2021-08-01',
    duringDate: 128,
    totalhour: '215d 12h',
    isRecruiting: true,
    private: password ? true : false,
  };

  return res(ctx.status(200), ctx.json(data));
});

// get room chat
export const roomGetChat = rest.get('/api/room/chat', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(roomChat));
});

// get sned room chat
export const roomSendchat = rest.post('/api/room/chat', async (req, res, ctx) => {
  let content;
  let createdAt;
  let roomId;

  await req.json().then((data) => {
    content = data.content;
    createdAt = data.createdAt;
    roomId = data.roomId;
  });

  const data = {
    content,
    createdAt,
  };
  return res(ctx.status(200), ctx.json(data));
});

// get room channel
export const roomGetChannel = rest.get('/api/room/channle', async (req, res, ctx) => {
  let roomId;
  if (!roomId) return res(ctx.status(400), ctx.json({ message: '방을 찾을 수 없습니다' }));
  return res(ctx.status(200), ctx.json(roomData.channelList));
});

// post room channel
export const roomPostChannel = rest.post('/api/room/channle', async (req, res, ctx) => {
  let name;
  let roomId;

  await req.json().then((data) => {
    name = data.name;
    roomId = data.roomId;
  });

  const data = {
    name,
    roomId,
    primary: false,
  };

  return res(ctx.status(200), ctx.json(data));
});
