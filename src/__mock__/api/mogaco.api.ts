import { rest } from 'msw';
import { userData } from '../data/user.data';

// endter mogaco
export const mogacoEnter = rest.post('/api/plan/user', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '모가코 가입 성공' }));
});

// out mogaco
export const mogacoOut = rest.delete('/api/plan/user', async (req, res, ctx) => {
  let mogacoId;
  await req.json().then((data) => {
    mogacoId = data.mogacoId;
  });

  return res(ctx.status(200), ctx.json({ mogacoId }));
});

// kick mogaco
export const mogacoKick = rest.delete('/api/plan/user', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '모가코 강퇴 성공' }));
});
