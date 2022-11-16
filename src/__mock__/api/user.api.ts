import { rest } from 'msw';
import { userData } from '../data/user.data';

// login
export const userLogin = rest.post('/api/user/login', async (req, res, ctx) => {
  let email;
  let password;

  await req.json().then((data) => {
    console.log(data);
    email = data.email;
    password = data.password;
  });

  if (email === 'test' && password === 'test') {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'token',
        info: userData,
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

// logout
export const userLogout = rest.post('/api/user/logout', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: '로그아웃 성공',
    }),
  );
});

// sign up
export const userSignUp = rest.post('/api/user/signup', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '회원가입 성공' }));
});

// auth eemail
export const userAuthSendEmail = rest.post('/api/user/auth/send', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '이메일 전송 성공' }));
});

export const userAuthEmail = rest.post('/api/user/auth/email', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '이메일 인증 성공' }));
});

// find email
export const userFindEmail = rest.post('/api/user/find/email', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '이메일 전송 성공' }));
});

// find password
export const userFindPassword = rest.post('/api/user/find/password', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '이메일 전송 성공' }));
});

// update user info
export const userUpdateName = rest.put('/api/user/info', async (req, res, ctx) => {
  let name;
  await req.json().then((data) => {
    name = data.name;
  });
  return res(ctx.status(200), ctx.json({ name }));
});

export const userUpdatePassword = rest.put('/api/user/info', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '이메일 전송 성공' }));
});

// delete user
export const userDelete = rest.delete('/api/user/info', async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '회원탈퇴 성공' }));
});
