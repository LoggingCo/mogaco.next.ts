import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log(req);
  const data = req.body;
  const { email, password } = data;
  if (email === 'test' && password === 'test') {
    return res.status(200).json({
      message: '로그인 성공',
      data: {
        token: 'test',
        name: '테스트개발자',
        level: 5,
      },
    });
  }

  if (email !== 'test' && password === 'test') {
    return res.status(400).json({
      message: '아이디가 존재하지 않습니다.',
    });
  }

  if (email === 'test' && password !== 'test') {
    return res.status(400).json({
      message: '비밀번호가 일치하지 않습니다.',
    });
  }

  return res.status(400).json({
    message: '아이디와 비밀번호를 확인해주세요.',
  });
};
