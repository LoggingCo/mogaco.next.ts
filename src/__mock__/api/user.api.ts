import { rest } from 'msw';
import { off } from 'process';

export const userLogin = rest.post('/api/user/login', async (req, res, ctx) => {
  let email;
  let password;

  await req.json().then((data) => {
    email = data.email;
    password = data.password;
  });

  console.log(email, password);

  if (email === 'test' && password === 'test') {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'token',
        name: '테스트용개발자',
        level: 5,
      }),
    );
  }

  if (email === '' || password === '') {
    return res(ctx.status(400), ctx.json({ message: '이메일과 비밀번호를 입력해주세요' }));
  }

  if (email !== 'test' || password !== 'test') {
    return res(ctx.status(400), ctx.json({ message: '이메일과 비밀번호를 확인해주세요' }));
  }

  if (email === 'test' && password !== 'test') {
    return res(ctx.status(400), ctx.json({ message: '비밀번호를 확인해주세요' }));
  }

  if (email !== 'test' && password === 'test') {
    return res(ctx.status(400), ctx.json({ message: '이메일을 확인해주세요' }));
  }
});

export const userLogout = rest.post('/api/user/logout', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: '로그아웃 성공',
    }),
  );
});
