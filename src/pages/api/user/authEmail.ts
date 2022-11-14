import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const data = req.body.data;
  const { authNumber } = data;

  if (!authNumber) {
    return res.status(400).json({
      message: '인증번호를 입력해주세요.',
    });
  }

  if (authNumber !== '123456') {
    return res.status(400).json({
      message: '인증번호가 일치하지 않습니다.',
    });
  }

  res.status(200).json({ message: '인증 성공' });
};
