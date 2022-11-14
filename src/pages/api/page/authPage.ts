import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const token = req.body.token;
  if (!token) {
    return {
      redirect: {
        destination: '/room-list',
        statusCode: 302,
      },
    };
  }
};
