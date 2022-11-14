import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const data = req.body.data;
  const { email, password } = data;

  if (!email || !password) {
    return res.status(400).json({
      message: '정보를 모두 기입해주세요.',
    });
  }
  res.status(200).json({ message: '회원가입 성공' });
};
