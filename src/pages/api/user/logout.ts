import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  return res.status(200).json({ message: '로그아웃 성공' });
};
